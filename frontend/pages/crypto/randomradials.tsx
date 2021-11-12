import CryptoPage from "../../components/CryptoPage";
import { randomPreset, generateSvg } from "../../controllers/artGenerator";
import { useState } from "react";

import useRandomRadials from "../../hooks/useRandomRadials";
import RandomRadialGallery from "../../components/RandomRadialGallery";
import { FaEthereum, FaGithub } from "react-icons/fa";
import { formatEtherscanLink } from "../../util";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { getRandomRadialsUsage } from "../../hooks/getRandomRadials";

const RandomRadialMinter = () => {
  const [seed, setSeed] = useState("");
  const [isMinting, setIsMinting] = useState(false);
  const randomRadials = useRandomRadials();
  const contractUsage = getRandomRadialsUsage();
  const { chainId, active } = useWeb3React<Web3Provider>();

  const mintRandomRadial = async () => {
    setIsMinting(true);
    const nftStorageResponse = await fetch(`/api/mint/${seed}`);
    const data = await nftStorageResponse.json();
    if (nftStorageResponse.ok && data && data.metadata) {
      const { metadata } = data;
      const tokenUri = metadata.url;

      if (!tokenUri) {
        alert("An error occurred (Error 1)");
        setIsMinting(false);
        return;
      }

      try {
        await randomRadials?.mintRandomRadial(tokenUri);
      } catch (e: any) {
        console.log(e);
        alert(e.message);
        setIsMinting(false);
      }
    } else {
      // handle error on ur
      console.log(data, nftStorageResponse);
      setIsMinting(false);
      return;
    }

    setIsMinting(false);
  };

  return (
    <CryptoPage title={"RandomRadials Minter | dsalib.com"} eagerConnect>
      <div className="w-full">
        <div className="flex flex-col md:flex-row lg:w-5/6 px-6 py-2 items-center mx-auto md:mt-4 lg:my-8">
          <div className="w-full md:w-3/5 order-first md:order-last">
            <div className="">
              <img
                className="mx-auto max-h-3/4 md:ml-auto md:mr-0 border-4 border-green-500 shadow-md lg:max-h-3/4"
                src={generateSvg(randomPreset(seed))}
              />
            </div>
          </div>
          <div className="w-full md:w-2/5 md:mr-4 border-4 border-green-500 shadow-md p-4">
            <h1 className="text-3xl handwriting text-green-800 dark:text-green-500">
              RandomRadials Minter
            </h1>
            <h2 className="text-md mt-2 dark:text-gray-300 font-medium">
              RandomRadials are NFTs composed of randomly generated images
              seeded on a provided string.
            </h2>
            <h2 className="text-md mt-2 dark:text-gray-400 font">
              Find that special one and mint it as an NFT, or browse until you
              find one you like!
            </h2>

            <div className="md:ml-auto mt-4 flex flex-col">
              <input
                type="text"
                name="search"
                placeholder="Enter some text!"
                onChange={(e) => setSeed(e.target.value)}
                value={seed}
                className="mt-2 py-2 bg-gray-100 dark:bg-gray-200 px-4 rounded-md text-md hover:ring-2 focus:outline-none ring-gray-100 dark:ring-gray-800 flex-grow"
              />
              {active ? (
                !!randomRadials &&
                !!contractUsage.data &&
                contractUsage.data.minted < contractUsage.data.total &&
                (isMinting ? (
                  <div className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-lg leading-6 font-medium rounded-md dark:bg-green-500  bg-green-300  text-gray-700 transform duration-150  flex-grow text-center cursor-not-allowed  opacity-70">
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
                    onClick={mintRandomRadial}
                    className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-lg leading-6 font-medium rounded-md dark:bg-green-500 dark:hover:bg-green-400 bg-green-300 hover:bg-green-200 transform duration-150 hover:shadow-md flex-grow text-center cursor-pointer"
                  >
                    Mint
                  </div>
                ))
              ) : (
                <div className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-lg leading-6 font-medium rounded-md dark:bg-green-500  bg-green-300 dark:hover:bg-green-400 hover:bg-green-200 transform duration-150 hover:shadow-md flex-grow text-center cursor-pointer">
                  Connect Your Wallet to Mint
                </div>
              )}

              {!!randomRadials && !!chainId && (
                <div>
                  <hr className="mt-3 border-gray-400 opacity-70" />

                  <div className="mt-3 space-x-1 flex flex-row justify-between items-center">
                    {!!contractUsage.data && (
                      <a
                        href={formatEtherscanLink("Token", [
                          chainId,
                          randomRadials.address,
                        ])}
                        target="_blank"
                      >
                        <div className="text-md font-semibold dark:text-gray-900 font bg-green-100 px-1 py-0.5 rounded-md bg-opacity-90">
                          {contractUsage.data.minted} /{" "}
                          {contractUsage.data.total}
                        </div>
                      </a>
                    )}
                    <div className="space-x-1 flex flex-row justify-end items-center">
                      <a
                        href="https://github.com/sanieldalib/dsalib.com/blob/main/eth/contracts/RandomRadials.sol"
                        target="_blank"
                      >
                        <div className="bg-gray-100 hover:bg-gray-200 text-green-800 hover:text-green-900 dark:text-gray-500 dark:bg-gray-800 dark:hover:bg-gray-800 dark:hover:text-green-700 px-1 py-1 rounded-md text-md font-medium cursor-pointer">
                          <FaGithub />
                        </div>
                      </a>
                      <a
                        href={formatEtherscanLink("Account", [
                          chainId,
                          randomRadials.address,
                        ])}
                        target="_blank"
                      >
                        <div className="bg-gray-100 hover:bg-gray-200 text-green-800 hover:text-green-900 dark:text-gray-500 dark:bg-gray-800 dark:hover:bg-gray-800 dark:hover:text-green-700 px-1 py-1 rounded-md text-md font-medium cursor-pointer">
                          <FaEthereum />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="flex flex-col md:flex-row lg:w-5/6 px-6 py-2 items-center mx-auto">
          <RandomRadialGallery />
        </div>
      </div>
    </CryptoPage>
  );
};

export default RandomRadialMinter;