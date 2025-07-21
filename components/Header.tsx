import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="px-6 mx-auto lg:px-12">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white font-['Pacifico',serif]">
              <Image src={"/assets/images/logo-white.png"} alt="Logo" width={60} height={60} className="inline-block mr-2" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
