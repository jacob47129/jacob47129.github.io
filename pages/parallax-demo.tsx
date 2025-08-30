import React from 'react';
import FullPageScroll, { ParallaxBackground, ParallaxContent } from '@/components/FullPageScroll';
import Header from '@/components/Header';

const ParallaxDemo = () => {
  const sections = [
    {
      id: 'section1',
      title: 'AI-Powered Analytics',
      content: 'Advanced machine learning algorithms analyze vast datasets to provide actionable insights.',
      image: '/assets/images/banner.jpeg'
    },
    {
      id: 'section2', 
      title: 'Comprehensive Data',
      content: 'Access the most complete database of real-world asset information.',
      image: '/assets/images/bck1_solo.jpeg'
    },
    {
      id: 'section3',
      title: 'Real-Time Insights', 
      content: 'Get instant access to market movements and emerging opportunities.',
      image: '/assets/images/bck2_solo.jpeg'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <FullPageScroll>
        {/* Hero Section */}
        <section id="hero" className="relative z-10 flex items-center justify-center min-h-screen pt-20">
          <ParallaxBackground speed={-20}>
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
              style={{
                backgroundImage: `url('/assets/images/bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </ParallaxBackground>
          
          <ParallaxContent speed={10} direction="up">
            <div className="relative z-10 text-center text-white">
              <h1 className="text-6xl font-bold mb-4">视差滚动体验</h1>
              <p className="text-xl opacity-90">探索现代网页设计的魅力</p>
            </div>
          </ParallaxContent>
        </section>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <ParallaxContent speed={index % 2 === 0 ? 5 : -5}>
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      了解更多
                    </button>
                  </div>
                </ParallaxContent>

                {/* Image */}
                <ParallaxContent speed={index % 2 === 0 ? -5 : 5}>
                  <div className="relative">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-96 object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                  </div>
                </ParallaxContent>
              </div>
            </div>
          </section>
        ))}

        {/* Floating Elements */}
        <ParallaxContent speed={-15} className="absolute top-1/4 left-10 opacity-30">
          <div className="w-20 h-20 bg-blue-500 rounded-full blur-sm" />
        </ParallaxContent>
        
        <ParallaxContent speed={-10} className="absolute top-1/2 right-20 opacity-30">
          <div className="w-32 h-32 bg-purple-500 rounded-full blur-sm" />
        </ParallaxContent>
        
        <ParallaxContent speed={-20} className="absolute bottom-1/4 left-1/3 opacity-30">
          <div className="w-16 h-16 bg-pink-500 rounded-full blur-sm" />
        </ParallaxContent>
      </FullPageScroll>
    </div>
  );
};

export default ParallaxDemo;
