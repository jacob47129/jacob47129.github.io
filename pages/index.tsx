import Header from "@/components/Header";
import FullPageScroll, { ParallaxBackground, ParallaxContent } from "@/components/FullPageScroll";

import { ReactElement } from "react";
import { Metadata } from "next";

import TEAM_CONFIG from "./team.json";
import { Blog } from "@/components/blog";

export const metadata: Metadata = {
  title: "Coming Soon - logo",
  description: "Site under reconstruction",
};

function Landing() {
  return (
    <div className="min-h-screen overflow-hidden text-white dark">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/assets/images/bck2_solo.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 "></div>
      </div>

      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>

      <FullPageScroll>
        {/* Hero Section */}
        <section id="hero" className="relative z-10 flex items-center justify-center min-h-screen pt-20">
          <ParallaxBackground speed={-15}>
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url('/assets/images/bck2_solo.jpeg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 "></div>
            </div>
          </ParallaxBackground>

          <ParallaxContent speed={10} direction="up">
            <div className="max-w-5xl px-6 mx-auto text-center">
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
                  <p className="mb-3 text-xl"> A community-powered, data-driven platform offering comprehensive insights into Real World Assets.</p>
                  <p> Access in-depth data, news, social media analysis, trading, and tailored solutions, all in one place.</p>
                </div>

                {/* 社交媒体按钮 - 仅在Hero section显示，滚动后会在Header中显示 */}
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
                  <a
                    href="mailto:team@rwg.world"
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  >
                    <i className="text-lg ri-mail-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </ParallaxContent>
        </section>

        {/* Features Section */}
        <section id="features" className="relative z-10 flex items-center min-h-screen px-6 py-20 lg:px-12 bg-gradient-to-br from-[#02050c] via-[#020f19] to-[#05314e]">
          <ParallaxContent speed={-5} direction="down">
            <div className="w-full max-w-6xl mx-auto">
              <div className="mb-16 text-center">
                <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Why Choose Real World Gate?</h2>
                <p className="max-w-3xl mx-auto text-xl text-slate-300">Your Gateway to Real World Asset Intelligence</p>
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
          </ParallaxContent>
        </section>

        {/* Blog Section */}
        <section id="blog" className="relative z-10 flex items-center min-h-screen px-12 py-20 bg-gradient-to-bl from-[#05314e] via-[#020f19] to-[#02050c]">
          <div className="w-full max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Blog</h2>
            </div>
            <Blog />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative z-10 flex items-center min-h-screen px-6 py-20 lg:px-12 bg-gradient-to-br from-[rgb(2,5,12)] via-[#020f19] to-[#05314e]">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex items-center gap-16">
              <div>
                <h2 className="mb-8 text-4xl font-bold text-center lg:text-5xl">About Real World Gate</h2>
                <h4 className="mb-6 text-lg font-bold text-center lg:text-2xl">Your Gateway to Real World Asset Intelligence</h4>
                <p className="mb-6 leading-relaxed text-justify text-normal text-slate-300">
                  Real World Gate is the premier data AI analytics platform dedicated to providing comprehensive intelligence on real-world assets. We bridge the gap between blockchain technology and
                  traditional assets, creating the ultimate gateway for RWA information.
                </p>
                <p className="mb-8 leading-relaxed text-justify text-normal text-slate-300">
                  RWG is a next-generation, community-driven platform dedicated to Real World Assets (RWA). Our mission is to bridge traditional finance and Web3 by aggregating high-quality RWA data,
                  news, market insights, and research, while fostering deep social interaction and professional networking.
                </p>
                <p className="mb-8 leading-relaxed text-justify text-normal text-slate-300">
                  Unlike existing platforms, RWG combines comprehensive data analytics with a vibrant professional community, enabling users to discover, analyze, and discuss RWA projects, market
                  trends, and investment opportunities. Our platform empowers both institutions and individual investors through tailored features such as project roadshows, expert Q&A, customizable
                  dashboards, and compliance-driven investment channels.
                </p>
                <p className="mb-8 leading-relaxed text-justify text-normal text-slate-300">
                  By integrating powerful tools, social features, and high-value content, RWG is building a trusted hub for knowledge sharing, professional collaboration, and seamless access to RWA
                  markets. Our vision is to drive industry standards, enhance transparency, and unlock the full potential of real-world asset tokenization.
                </p>
              </div>
              {/* <div className="relative w-[300px]">
                <img src="/assets/images/illustrations/research.svg" alt="Data analytics and AI visualization" />
              </div> */}
            </div>
          </div>
        </section>

        {/* Investor Section */}
        <section id="investor" className="relative z-10 flex items-center min-h-screen px-6 py-20 lg:px-12 bg-gradient-to-bl from-[#05314e] via-[#020f19] to-[#02050c]">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative">
                <img src="/assets/images/illustrations/Investing-bro.svg" />
              </div>
              <div>
                <h2 className="mb-8 text-4xl font-bold lg:text-5xl">Looking for Investors?</h2>
                <p className="mb-6 text-lg leading-relaxed text-slate-300">
                  We are actively seeking interesting investment opportunities in RWA. Whether you’re an innovator, entrepreneur, or investor, connect with us to explore collaborations and funding
                  partnerships.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-slate-300">
                  Our community is supported by Danxia Capital, a community investment group with a proven track record in Web3 and Blockchain projects.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-slate-300">
                  Contact Us On{" "}
                  <a href="mailto:team@rwg.world" className="underline">
                    team@rwg.world
                  </a>{" "}
                  for more information
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="relative z-10 flex items-center min-h-screen px-6 py-20 lg:px-12 bg-gradient-to-br from-[rgb(2,5,12)] via-[#020f19] to-[#05314e]">
          <div className="w-full max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Meet Our Team</h2>
              <p className="max-w-3xl mx-auto text-xl text-slate-300">Data scientists, AI experts, and blockchain analysts driving innovation in RWA intelligence</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {TEAM_CONFIG.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <img
                      src={`/assets/images/team/${index + 1}.jpg`}
                      alt="CEO"
                      className="object-cover w-32 h-32 mx-auto transition-all duration-300 border-4 rounded-full border-white/20 group-hover:border-blue-400/50"
                    />
                    <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">{item.name}</h3>
                  <p className="mb-3 text-blue-300">{item.title}</p>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative z-10 flex items-center min-h-screen px-6 py-20 lg:px-12 bg-gradient-to-bl from-[#05314e] via-[#020f19] to-[#02050c]">
          <div className="w-full max-w-4xl mx-auto text-center">
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
                <a
                  href="mailto:team@rwg.world"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
                >
                  <i className="text-lg ri-mail-line"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </FullPageScroll>
    </div>
  );
}

Landing.getLayout = function getLayout(page: ReactElement): ReactElement {
  return page;
};
export default Landing;
