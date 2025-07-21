import Header from "@/components/Header";

import type { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon - logo",
  description: "Site under reconstruction",
};

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/assets/images/bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>

      <Header />

      <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-4">Tokenize and Access Real-World Assets on Blockchain</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-[0.2em] mb-8">COMING SOON</h1>
          </div>

          <div className="space-y-6">
            <div className="text-sm tracking-wider text-white/60">
              <p>Discover the ultimate gateway to tokenizing your real-world assets. Connect physical assets with blockchain</p>
              <p>real estate, treasuries, commodities, and more.</p>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://x.com/RwgWorld"
                className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <i className="text-lg ri-twitter-x-line"></i>
              </a>
              <a
                href="https://discord.com/channels/1393165043717378160/1393165046506328117"
                className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <i className="text-lg ri-discord-line"></i>
              </a>
              <a
                href="https://t.me/+960i07prFeIzYzll"
                className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <i className="text-lg ri-telegram-2-line"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Landing.getLayout = function getLayout(page: ReactElement): ReactElement {
  return page;
};
export default Landing;
