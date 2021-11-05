import CryptoPage from "../../components/CryptoPage";
import { randomPreset, generateSvg } from "../../artGenerator";
import { useState } from "react";

const NFTMinter = () => {
  const [seed, setSeed] = useState("");

  return (
    <CryptoPage title={"NFT Minter | dsalib.com"} walletModal>
      <div className="w-full mt-2">
        <div className="flex flex-col md:flex-row lg:w-5/6 px-4 py-4 space-y-10 items-center mx-auto max-h-screen">
          <div className="w-full md:w-3/5 order-first md:order-last">
            <div className="shadow-md">
              <img
                className="h-auto mx-auto sm:ml-auto border-4 border-green-500"
                src={`data:image/svg+xml;utf8,${generateSvg(
                  randomPreset(seed)
                )}`}
              />
            </div>
          </div>
          <div className="w-full md:w-2/5 md:mr-10">
            <h1 className="text-3xl handwriting text-green-800 dark:text-green-500">
              Generative NFT Minter
            </h1>
            <h2 className="text-md mt-2 dark:text-gray-400">
              These NFTs are randomly generated from a provided seed. Try to
              find one you like and mint it first!
            </h2>
            <div className="md:ml-auto mt-4 flex flex-row h-8">
              <input
                type="text"
                name="search"
                placeholder="Enter some text!"
                onChange={(e) => setSeed(e.target.value)}
                value={seed}
                className="bg-gray-200 dark:bg-gray-200 h-full px-4 rounded-md text-md hover:ring-2 focus:outline-none ring-gray-100 dark:ring-gray-800 flex-grow"
              />
              <button className="ml-2 h-full px-4 rounded-md dark:bg-green-500 dark:hover:bg-green-400 bg-green-300 hover:bg-green-200">
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>
    </CryptoPage>
  );
};

export default NFTMinter;
