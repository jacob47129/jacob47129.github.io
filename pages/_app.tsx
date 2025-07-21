import { Inter } from "next/font/google";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

import "./globals.css";
import 'remixicon/fonts/remixicon.css'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
