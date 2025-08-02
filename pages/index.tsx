import Header from "@/components/Header";

import { ReactElement } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon - logo",
  description: "Site under reconstruction",
};

function Landing() {
  return (
    <div className="min-h-screen overflow-hidden text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="absolute inset-0 bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>

      <Header />

      <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="inline-flex items-center px-4 py-2 mb-5 space-x-2 text-sm border rounded-full bg-blue-500/20 backdrop-blur-sm border-blue-400/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 text-blue-300 lucide lucide-brain"
              >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
              </svg>
              <span className="text-white ">AI-Powered RWA Analytics</span>
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-[0.2em] mb-8">REAL WORLD GATE</h1>
          </div>

          <div className="space-y-6">
            <div className="text-sm tracking-wider text-white/60">
              <p className="mb-3 text-xl"> Connecting Blockchain and Reality. The Ultimate Gateway to Your Real-World Assets.</p>
              <p>Your one-stop data AI analytics platform for comprehensive real-world asset intelligence, market insights, and predictive analytics.</p>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://x.com/RwgWorld"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <i className="text-lg ri-twitter-x-line"></i>
              </a>
              <a
                href="https://discord.gg/9U9Uwz458x"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <i className="text-lg ri-discord-line"></i>
              </a>
              <a
                href="https://t.me/+b0PITBKd_GczOTRl"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <i className="text-lg ri-telegram-2-line"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
      {/* section #2 */}
      <section className="relative z-10 px-6 py-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Why Choose Real World Gate?</h2>
            <p className="max-w-3xl mx-auto text-xl text-slate-300">Advanced AI analytics and comprehensive data intelligence for real-world asset markets</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 transition-all duration-300 border group bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl hover:bg-white/10 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-6 transition-transform bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-8 h-8 text-white lucide lucide-brain"
                >
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">AI-Powered Analytics</h3>
              <p className="leading-relaxed text-slate-300">
                Advanced machine learning algorithms analyze vast datasets to provide actionable insights and predictive analytics for real-world asset markets.
              </p>
            </div>
            <div className="p-8 transition-all duration-300 border group bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl hover:bg-white/10 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-6 transition-transform bg-gradient-to-br from-green-400 to-green-600 rounded-2xl group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-8 h-8 text-white lucide lucide-database"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Comprehensive Data</h3>
              <p className="leading-relaxed text-slate-300">
                Access the most complete database of real-world asset information, from market trends to regulatory changes, all in one centralized platform.
              </p>
            </div>
            <div className="p-8 transition-all duration-300 border group bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl hover:bg-white/10 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 mb-6 transition-transform bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-8 h-8 text-white lucide lucide-bar-chart3"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Real-Time Insights</h3>
              <p className="leading-relaxed text-slate-300">
                Get instant access to market movements, price fluctuations, and emerging opportunities with our real-time data processing and visualization tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section #3 */}
      <section id="about" className="relative z-10 px-6 py-20 lg:px-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-bold lg:text-5xl">About Real World Gate</h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-300">
                Real World Gate is the premier data AI analytics platform dedicated to providing comprehensive intelligence on real-world assets. We bridge the gap between blockchain technology and
                traditional assets, creating the ultimate gateway for RWA information.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                Our platform serves as your one-stop destination for RWA intelligence, combining cutting-edge artificial intelligence with extensive data sources to deliver unparalleled market
                insights and investment intelligence that connects blockchain innovation with real-world value.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-200">Real-time blockchain &amp; RWA data aggregation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-200">AI-driven predictive analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-200">Comprehensive asset intelligence gateway</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/assets/images/illustrations/research.svg" alt="Data analytics and AI visualization" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20 lg:px-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Ready to Connect Blockchain and Reality?</h2>
          <p className="max-w-2xl mx-auto mb-12 text-xl text-slate-300">Join thousands of investors and analysts who rely on Real World Gate as their ultimate gateway to RWA intelligence.</p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="flex justify-center space-x-8">
              <a
                href="https://x.com/RwgWorld"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <i className="text-lg ri-twitter-x-line"></i>
              </a>
              <a
                href="https://discord.gg/9U9Uwz458x"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <i className="text-lg ri-discord-line"></i>
              </a>
              <a
                href="https://t.me/+b0PITBKd_GczOTRl"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <i className="text-lg ri-telegram-2-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Landing.getLayout = function getLayout(page: ReactElement): ReactElement {
  return page;
};
export default Landing;
