"use client";

import React, { useState, useEffect, useRef, ReactNode, useCallback } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

interface FullPageScrollProps {
  children: ReactNode;
  className?: string;
}

interface Section {
  id: string;
  element: HTMLElement;
}

// 导航点组件
const NavigationDots: React.FC<{
  sections: Section[];
  currentSection: number;
  onSectionClick: (index: number) => void;
}> = ({ sections, currentSection, onSectionClick }) => (
  <div className="fixed z-50 flex flex-col space-y-4 transform -translate-y-1/2 right-8 top-1/2">
    {sections.map((section, index) => (
      <button
        key={section.id}
        onClick={() => onSectionClick(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSection ? "bg-white scale-125 shadow-lg" : "bg-white/30 hover:bg-white/60 hover:scale-110"}`}
        aria-label={`Go to section ${index + 1}`}
      />
    ))}
  </div>
);

const FullPageScroll: React.FC<FullPageScrollProps> = ({ children, className = "" }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<Section[]>([]);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wheelDeltaRef = useRef<number>(0); // 累积滚轮值
  const wheelThreshold = 50; // 滚轮阈值

  // 获取所有section元素
  useEffect(() => {
    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll("section");
      sectionsRef.current = Array.from(sections).map((section, index) => ({
        id: section.id || `section-${index}`,
        element: section,
      }));
    }
  }, [children]);

  // 滚动到指定section
  const scrollToSection = useCallback(
    (index: number) => {
      if (index < 0 || index >= sectionsRef.current.length) return;
      if (index === currentSection) return; // 防止滚动到当前section

      console.log(`Scrolling to section ${index}, current: ${currentSection}, isScrolling: ${isScrolling}`);
      
      setIsScrolling(true);
      setCurrentSection(index);

      const targetSection = sectionsRef.current[index];
      if (targetSection?.element) {
        targetSection.element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // 清除之前的定时器
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // 设置新的定时器
      scrollTimeoutRef.current = setTimeout(() => {
        console.log(`Scroll timeout completed, setting isScrolling to false`);
        setIsScrolling(false);
        wheelDeltaRef.current = 0; // 重置滚轮累积值
      }, 1000); // 增加延迟时间
    },
    [currentSection, isScrolling]
  );

  // 处理滚轮事件
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      
      // 检查是否在滚动中
      if (isScrolling) {
        console.log('Wheel event blocked - isScrolling is true');
        return;
      }

      // 累积滚轮值
      wheelDeltaRef.current += e.deltaY;

      // 检查是否达到阈值
      if (Math.abs(wheelDeltaRef.current) < wheelThreshold) {
        return;
      }

      // 重置累积值
      wheelDeltaRef.current = 0;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      console.log(`Wheel event: delta=${e.deltaY}, direction=${direction}, nextSection=${nextSection}, currentSection=${currentSection}`);

      if (nextSection >= 0 && nextSection < sectionsRef.current.length) {
        scrollToSection(nextSection);
      }
    },
    [currentSection, isScrolling, scrollToSection]
  );

  // 处理键盘事件
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isScrolling) return;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          if (currentSection < sectionsRef.current.length - 1) {
            scrollToSection(currentSection + 1);
          }
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          if (currentSection > 0) {
            scrollToSection(currentSection - 1);
          }
          break;
        case "Home":
          e.preventDefault();
          scrollToSection(0);
          break;
        case "End":
          e.preventDefault();
          scrollToSection(sectionsRef.current.length - 1);
          break;
      }
    },
    [currentSection, isScrolling, scrollToSection]
  );

  // 处理触摸事件（移动端）
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (isScrolling) return;

      touchEndRef.current = e.changedTouches[0].clientY;
      const diff = touchStartRef.current - touchEndRef.current;
      const minSwipeDistance = 50;

      if (Math.abs(diff) > minSwipeDistance) {
        if (diff > 0 && currentSection < sectionsRef.current.length - 1) {
          // 向上滑动，下一页
          scrollToSection(currentSection + 1);
        } else if (diff < 0 && currentSection > 0) {
          // 向下滑动，上一页
          scrollToSection(currentSection - 1);
        }
      }
    },
    [currentSection, isScrolling, scrollToSection]
  );

  // 处理滚动事件以更新当前section
  const handleScroll = useCallback(() => {
    if (isScrolling) return;

    const container = containerRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const windowHeight = container.clientHeight;
    const currentIndex = Math.round(scrollTop / windowHeight);

    if (currentIndex !== currentSection && currentIndex >= 0 && currentIndex < sectionsRef.current.length) {
      setCurrentSection(currentIndex);
    }
  }, [currentSection, isScrolling]);

  // 添加事件监听器
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleWheel, handleScroll, handleKeyDown, handleTouchStart, handleTouchEnd]);

  // 清理定时器
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <ParallaxProvider>
      <div
        ref={containerRef}
        className={`fullpage-scroll ${className}`}
        style={{
          height: "100vh",
          overflow: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {children}
        <NavigationDots sections={sectionsRef.current} currentSection={currentSection} onSectionClick={scrollToSection} />
      </div>
    </ParallaxProvider>
  );
};

// 视差背景组件
export const ParallaxBackground: React.FC<{
  children: ReactNode;
  speed?: number;
}> = ({ children, speed = -20 }) => (
  <Parallax speed={speed} className="absolute inset-0">
    {children}
  </Parallax>
);

// 视差内容组件
export const ParallaxContent: React.FC<{
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
}> = ({ children, speed = 5, direction = "up", className = "" }) => (
  <Parallax speed={direction === "up" ? speed : -speed} className={className}>
    {children}
  </Parallax>
);

export default FullPageScroll;
