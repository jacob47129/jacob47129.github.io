import React from 'react';
import FullPageScroll from '@/components/FullPageScroll';
import Header from '@/components/Header';

const TestScroll = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <FullPageScroll>
        {/* Section 1 */}
        <section id="section1" className="relative flex items-center justify-center min-h-screen pt-20 bg-gradient-to-br from-blue-500 to-purple-600">
          <div className="text-center text-white">
            <h1 className="mb-4 text-6xl font-bold">Section 1</h1>
            <p className="text-xl">向下滚动到下一节</p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section2" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-blue-600">
          <div className="text-center text-white">
            <h1 className="mb-4 text-6xl font-bold">Section 2</h1>
            <p className="text-xl">继续向下滚动</p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="section3" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-red-500 to-orange-600">
          <div className="text-center text-white">
            <h1 className="mb-4 text-6xl font-bold">Section 3</h1>
            <p className="text-xl">最后一节，现在可以向上滚动</p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="section4" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-600">
          <div className="text-center text-white">
            <h1 className="mb-4 text-6xl font-bold">Section 4</h1>
            <p className="text-xl">测试向上滚动功能</p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="section5" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-500 to-red-600">
          <div className="text-center text-white">
            <h1 className="mb-4 text-6xl font-bold">Section 5</h1>
            <p className="text-xl">最终测试节</p>
          </div>
        </section>
      </FullPageScroll>
    </div>
  );
};

export default TestScroll;
