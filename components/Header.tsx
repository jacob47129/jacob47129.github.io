import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  // 使用Intersection Observer检测当前可见的section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      {
        threshold: 0.5, // 当section有50%可见时触发
        rootMargin: "-20% 0px -20% 0px", // 调整触发区域
      }
    );

    // 观察所有section
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // 处理滚动效果
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 200, 1);
      setScrollProgress(progress);
      setIsScrolled(scrollY > 100);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // 根据当前页面返回不同的导航项

  const navigationItems = [
    { name: "Features", href: "#features" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "#about" },
    { name: "Investor", href: "#investor" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? `rgba(15, 23, 42, ${0.95 + scrollProgress * 0.05})` : `rgba(0, 0, 0, ${0.2 * scrollProgress})`,
        backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
        boxShadow: isScrolled ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
      }}
    >
      <div className="px-6 mx-auto lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => {
                const heroElement = document.querySelector("#hero");
                if (heroElement) {
                  heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`text-2xl font-bold transition-opacity cursor-pointer relative ${activeSection === "hero" ? "text-white" : "text-white hover:opacity-80"}`}
            >
              <Image src={"/assets/images/logo-white.png"} alt="Logo" width={50} height={50} className="inline-block mr-2" />
              <span className="hidden sm:inline">REAL WORLD GATE</span>
              <span className="sm:hidden">RWG</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center justify-end hidden mr-5 space-x-8 grow md:flex">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className={`transition-all duration-200 font-medium relative group ${isActive ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              className={`px-6 py-2 text-sm font-medium text-white transition-all rounded-full cursor-pointer hover:scale-105 ${
                isScrolled ? "bg-blue-600 hover:bg-blue-700 shadow-lg" : "bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm"
              }`}
            >
              Launch App
            </button>
          </div>

          {/* Back to Top Button - Only show when scrolled */}
          {isScrolled && (
            <div className="hidden ml-4 md:block">
              <button
                onClick={() => {
                  const heroElement = document.querySelector("#hero");
                  if (heroElement) {
                    heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="p-2 transition-colors text-white/80 hover:text-white"
                title="Back to top"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="p-2 text-white transition-colors rounded-lg md:hidden hover:bg-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 mt-2 space-y-1 rounded-lg bg-slate-900/95 backdrop-blur-md">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 relative ${isActive ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <div className="px-3 py-2 space-y-2">
                <button className="w-full px-4 py-2 text-sm font-medium text-white transition-all bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700">Launch App</button>
                {isScrolled && (
                  <button
                    onClick={() => {
                      const heroElement = document.querySelector("#hero");
                      if (heroElement) {
                        heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-sm font-medium transition-all border rounded-full cursor-pointer text-white/80 border-white/20 hover:bg-white/10"
                  >
                    Back to Top
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
