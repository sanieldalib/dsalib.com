import Head from "next/head";
import Navbar from "./Navbar";
import { useWeb3React } from "@web3-react/core";
import Page from "../components/Page";
import useEagerConnect from "../hooks/useEagerConnect";
import { CHAIN_NAMES } from "../util";

type PageProps = {
  title?: string;
  description?: string;
};

const CryptoPage: React.FC<PageProps> = (props) => {
  const { account, library, chainId } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;
  return (
    <div
    className={`${
      chainId && isConnected && chainId > 1 && `border-8 border-blue-600`
    } min-h-full`}
  >
    <Page {...props}>
      {chainId && isConnected && typeof chainId === "number" && (
        <div
          className={`text-white ${
            chainId === 1 ? "bg-green-800 px-1" : "bg-blue-600 pr-1"
          } fixed bottom-0 font-bold`}
        >
          {CHAIN_NAMES[chainId]}
        </div>
      )}
      {props.children}
    </Page>
    </div>
  );
};

export default CryptoPage;
