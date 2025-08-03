import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [bgOpacity, setBgOpacity] = useState(0); // 0 ~ 1

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 限制最大透明度为 1，滚动 500px 后完全不透明
      const newOpacity = Math.min(scrollY / 500, 1);
      setBgOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className="z-50 w-full transition-colors duration-300 bg-transparent shadow"
      style={{
        backgroundColor: `rgba(19, 36, 82, ${bgOpacity})`,
        backdropFilter: bgOpacity > 0.1 ? "blur(8px)" : "none",
      }}
    >
      <div className="px-6 mx-auto lg:px-12">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image src={"/assets/images/logo-white.png"} alt="Logo" width={60} height={60} className="inline-block mr-2" />
              <span className="">REAL WORLD GATE</span>
            </Link>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-white transition-all bg-blue-800 rounded-full cursor-pointer backdrop-blur-sm hover:bg-blue-900">Launch App</button>
        </div>
      </div>
    </header>
  );
}
