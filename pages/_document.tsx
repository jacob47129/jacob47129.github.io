import { Metadata } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "Tokenize and Access Real-World Assets on Blockchain",
  description: "Real World Assets on Blockchain | Tokenize Commodities, Real Estate, Bonds & More",
  keywords: "Real World Assets,Tokenized Real World Assets,RWA,RWA investment,RWA Platform",
  openGraph: {
    title: "Tokenize and Access Real-World Assets on Blockchain",
    description: "Real World Assets on Blockchain | Tokenize Commodities, Real Estate, Bonds & More",
    images: [
      {
        url: "/assets/images/banner.jpeg",
        width: 800,
        height: 600,
        alt: "banner",
      },
    ],
  },
};

export default function Document({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
