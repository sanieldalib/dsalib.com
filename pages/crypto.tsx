import { useWeb3React } from "@web3-react/core";
import CryptoPage from "../components/CryptoPage";
import { CHAIN_NAMES } from "../util";
import ConnectWalletDialog from "../components/ConnectWalletDialog";
import type { NextPage } from "next";

const Crypto: NextPage = () => {
  const { account, library, chainId } = useWeb3React();
  const isConnected = typeof account === "string" && !!library;
  console.log(isConnected)

  return (
      <CryptoPage title={"Crypto | Daniel Salib"}>
          {!isConnected && <ConnectWalletDialog isConnected={isConnected}/>}
        <div className="w-full">
          <div className="flex justify-center">
            <div className="px-4 py-4 lg:w-4/5">
              <h1>
                  
              </h1>
            </div>
          </div>
          {chainId && isConnected && (
            <div
              className={`text-white ${
                chainId === 1 ? "bg-green-800 px-1" : "bg-blue-600 pr-1"
              } fixed bottom-0 font-bold`}
            >
              {CHAIN_NAMES[chainId]}
            </div>
          )}
        </div>
      </CryptoPage>
  );
}

export default Crypto;
