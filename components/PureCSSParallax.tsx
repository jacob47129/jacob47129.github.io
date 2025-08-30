'use client';

import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  backgroundImage?: string;
}

interface PureCSSParallaxProps {
  sections: Array<{
    id: string;
    title: string;
    content: string;
    image?: string;
    backgroundImage?: string;
    speed?: number;
  }>;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.5, 
  className = "",
  backgroundImage
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      
      if (backgroundImage) {
        sectionRef.current.style.transform = `translateY(${rate}px)`;
      } else {
        sectionRef.current.style.transform = `translateY(${rate * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, backgroundImage]);

  return (
    <div 
      ref={sectionRef}
      className={`parallax-section ${className}`}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    >
      {children}
    </div>
  );
};

const PureCSSParallax: React.FC<PureCSSParallaxProps> = ({ sections }) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxSection 
          speed={0.5} 
          className="absolute inset-0"
          backgroundImage="/assets/images/bg.jpg"
        >
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-indigo-900/80"
            style={{
              backgroundImage: `url('/assets/images/bg.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
        </ParallaxSection>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">视差滚动体验</h1>
          <p className="text-xl opacity-90 animate-fade-in-delay">探索现代网页设计的魅力</p>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section key={section.id} className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <ParallaxSection speed={index % 2 === 0 ? 0.3 : -0.3}>
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                    了解更多
                  </button>
                </div>
              </ParallaxSection>

              {/* Image */}
              {section.image && (
                <ParallaxSection speed={index % 2 === 0 ? -0.3 : 0.3}>
                  <div className="relative group">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-96 object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                  </div>
                </ParallaxSection>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Floating Elements with CSS Parallax */}
      <div className="fixed top-1/4 left-10 opacity-30 pointer-events-none">
        <ParallaxSection speed={0.8}>
          <div className="w-20 h-20 bg-blue-500 rounded-full blur-sm animate-pulse" />
        </ParallaxSection>
      </div>
      
      <div className="fixed top-1/2 right-20 opacity-30 pointer-events-none">
        <ParallaxSection speed={0.6}>
          <div className="w-32 h-32 bg-purple-500 rounded-full blur-sm animate-pulse" />
        </ParallaxSection>
      </div>
      
      <div className="fixed bottom-1/4 left-1/3 opacity-30 pointer-events-none">
        <ParallaxSection speed={1.0}>
          <div className="w-16 h-16 bg-pink-500 rounded-full blur-sm animate-pulse" />
        </ParallaxSection>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white opacity-70">
          <span className="text-sm mb-2">向下滚动</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PureCSSParallax;
