import CryptoPage from "../../components/CryptoPage";
import { randomPreset, generateSvg, dateToString } from "../../controllers/artGenerator";
import { useState } from "react";

import { RandomRadials } from "../../contracts/types/RandomRadials"
import useRandomRadials from "../../hooks/useRandomRadials";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import getUsersRandomRadials from "../../hooks/useTokenBalance";
import useIPFS from "../../hooks/useIPFS";

const NFTMinter = () => {
  const [seed, setSeed] = useState("");
  const [date, setDate] = useState(dateToString(new Date()));
  const [isMinting, setIsMinting] = useState(false);
  const randomRadials = useRandomRadials();
  const nfts = getUsersRandomRadials();
  const {data} = useIPFS('ipfs://bafyreiape6bxdy4fqfwqe6stxzlkqgc7ydqt4pfcll6ssmnytcma6n6pqe/metadata.json');


  const mintNFT = async () => {
    setIsMinting(true)
    const nftStorageResponse = await fetch(`/api/mint/${date}${seed}`);
    const data = await nftStorageResponse.json()
    if (nftStorageResponse.ok && data && data.metadata) {
      const { metadata } = data;
      const tokenUri = metadata.url

      if (!tokenUri) { return; }

      await randomRadials?.mintRandomRadial(tokenUri);
    } else {
      // handle error on ur
      console.log(data, nftStorageResponse);
      setIsMinting(false);
      return;
    }

    setIsMinting(false)
  }

  return (
    <CryptoPage title={"NFT Minter | dsalib.com"} eagerConnect>
      <div className="w-full">
        <div className="flex flex-col md:flex-row lg:w-5/6 px-6 py-2 items-center mx-auto">
          <div className="w-full md:w-3/5 order-first md:order-last">
            <div className="">
              <img
                className="mx-auto max-h-3/4 md:ml-auto md:mr-0 border-4 border-green-500 shadow-md lg:max-h-3/4"
                src={generateSvg(randomPreset(seed, date))}
              />
            </div>
          </div>
          <div className="w-full md:w-2/5 md:mr-4 border-4 border-green-500 shadow-md p-4">
            <h1 className="text-3xl handwriting text-green-800 dark:text-green-500">
              Generative NFT Minter
            </h1>
            <h2 className="text-md mt-2 dark:text-gray-300 font-medium">
              These images are randomly generated from a provided seedphrase in
              addition to the date.
            </h2>
            <h2 className="text-md mt-2 dark:text-gray-400 font">
              Find that special one and mint it as an NFT, or browse what your
              phrase generates on another day!
            </h2>
            <div className="md:ml-auto mt-4 flex flex-col">
              <input
                type="date"
                className="mt-2 py-2 bg-gray-100 dark:bg-gray-200 px-4 rounded-md text-md hover:ring-2 focus:outline-none ring-gray-100 dark:ring-gray-800"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="text"
                name="search"
                placeholder="Enter some text!"
                onChange={(e) => setSeed(e.target.value)}
                value={seed}
                className="mt-2 py-2 bg-gray-100 dark:bg-gray-200 px-4 rounded-md text-md hover:ring-2 focus:outline-none ring-gray-100 dark:ring-gray-800 flex-grow"
              />
              {date === dateToString(new Date()) &&
                (isMinting ? (
                  <div
                    className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-lg leading-6 font-medium rounded-md dark:bg-green-500  bg-green-300  text-gray-700 transform duration-150  flex-grow text-center cursor-not-allowed  opacity-70"
                  >
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Minting...
                  </div>
                ) : (
                  <div
                    onClick={mintNFT}
                    className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-lg leading-6 font-medium rounded-md dark:bg-green-500 dark:hover:bg-green-400 bg-green-300 hover:bg-green-200 transform duration-150 hover:shadow-md flex-grow text-center cursor-pointer"
                  >
                    Mint
                  </div>
                ))}
            </div>
          </div>
        </div>
        {nfts}
        {/* {data && <img src={generateSvg(randomPreset(data.name.substring('RandomRadial '.length)))}/>} */}
      </div>
    </CryptoPage>
  );
};

export default NFTMinter;
