import { ReactElement } from "react";
import { Metadata } from "next";
import FullPageScroll from "@/components/FullPageScroll";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Full Page Scroll Demo - Real World Gate",
  description: "Demo of Apple-style full page scroll navigation",
};

function DemoPage() {
  return (
    <div className="min-h-screen overflow-hidden text-white dark">
      <Header />
      <FullPageScroll>
        {/* Section 1 - Hero */}
        <section id="hero" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-20">
          <div className="text-center">
            <h1 className="mb-6 text-6xl font-bold">Full Page Scroll Demo</h1>
            <p className="mb-8 text-xl text-blue-200">Apple-style vertical slide navigation</p>
            <div className="space-y-4">
              <p className="text-lg">Use your mouse wheel, arrow keys, or swipe to navigate</p>
              <p className="text-sm text-blue-300">Scroll down to explore the sections</p>
            </div>
          </div>
        </section>

        {/* Section 2 - Features */}
        <section id="features" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-5xl font-bold">Features</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <h3 className="mb-4 text-2xl font-bold">Smooth Scrolling</h3>
                <p className="text-purple-200">Fluid transitions between sections</p>
              </div>
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <h3 className="mb-4 text-2xl font-bold">Keyboard Navigation</h3>
                <p className="text-purple-200">Arrow keys, Page Up/Down, Home/End</p>
              </div>
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <h3 className="mb-4 text-2xl font-bold">Touch Support</h3>
                <p className="text-purple-200">Swipe gestures for mobile devices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Navigation */}
        <section id="navigation" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-5xl font-bold">Navigation Controls</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="text-left">
                <h3 className="mb-4 text-2xl font-bold">Mouse & Keyboard</h3>
                <ul className="space-y-2 text-green-200">
                  <li>• Mouse wheel to scroll</li>
                  <li>• Arrow keys (↑↓)</li>
                  <li>• Page Up/Down</li>
                  <li>• Home/End keys</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="mb-4 text-2xl font-bold">Touch & Visual</h3>
                <ul className="space-y-2 text-green-200">
                  <li>• Swipe up/down</li>
                  <li>• Navigation dots (right)</li>
                  <li>• Click to jump</li>
                  <li>• Smooth transitions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Customization */}
        <section id="customization" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-5xl font-bold">Easy Customization</h2>
            <div className="p-8 rounded-lg bg-white/10 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold">CSS Classes Available</h3>
              <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-3">
                <div>
                  <code className="text-red-300">.fullpage-scroll</code>
                  <p className="text-sm text-red-200">Main container</p>
                </div>
                <div>
                  <code className="text-red-300">.fullpage-scroll section</code>
                  <p className="text-sm text-red-200">Section styles</p>
                </div>
                <div>
                  <code className="text-red-300">.navigation-dots</code>
                  <p className="text-sm text-red-200">Navigation dots</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Implementation */}
        <section id="implementation" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-5xl font-bold">Simple Implementation</h2>
            <div className="p-8 text-left rounded-lg bg-white/10 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold">Just wrap your sections:</h3>
              <pre className="p-4 overflow-x-auto text-sm rounded bg-black/50">
{`import FullPageScroll from "@/components/FullPageScroll";

function MyPage() {
  return (
    <FullPageScroll>
      <section className="min-h-screen">
        {/* Your content */}
      </section>
    </FullPageScroll>
  );
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Section 6 - Contact */}
        <section id="contact" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
          <div className="text-center">
            <h2 className="mb-8 text-5xl font-bold">Ready to Use?</h2>
            <p className="mb-8 text-xl text-gray-300">The full page scroll component is now integrated into your project!</p>
            <div className="space-y-4">
              <p className="text-lg">Check out the main page to see it in action</p>
              <a 
                href="/" 
                className="inline-block px-8 py-4 transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Go to Main Page
              </a>
            </div>
          </div>
        </section>
      </FullPageScroll>
    </div>
  );
}

DemoPage.getLayout = function getLayout(page: ReactElement): ReactElement {
  return page;
};

export default DemoPage;
