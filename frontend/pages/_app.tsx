import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/style.css";

import { hotjar } from "react-hotjar";
import { useEffect } from "react";

import getLibrary from "../controllers/getLibrary";

function NextWeb3App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(2734449, 6);
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default NextWeb3App;
