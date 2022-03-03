import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/style.css";

import getLibrary from "../controllers/getLibrary";

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default NextWeb3App;
