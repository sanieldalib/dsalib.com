import CryptoPage from "../../components/CryptoPage";
import { randomPreset, generateSvg } from "../../artGenerator";
import { useState } from "react";

const NFTMinter = () => {
  const [seed, setSeed] = useState("");

  return (
    <CryptoPage title={"NFT Minter | dsalib.com"} walletModal>
      <div className="w-full">
          <div className="flex flex-col md:flex-row lg:w-5/6 px-4 py-4">
            <div className="w-1/2">
              <h1 className="text-3xl handwriting text-green-800 text-center">
                NFT Minter
              </h1>
              <div className="md:ml-auto">
                <div className="relative text-gray-600">
                  <input
                    type="search"
                    name="search"
                    placeholder="Enter some text!"
                    onChange={(e) => setSeed(e.target.value)}
                    value={seed}
                    className="bg-white h-10 px-5 rounded-md text-md hover:ring-2 focus:outline-none ring-1 ring-gray-100"
                  />
                </div>
              </div>
            </div>

            {/* <button onClick={randomize}>Randomize</button> */}

            <div className="w-1/2">
              <div className="shadow-md">
                <img
                  src={`data:image/svg+xml;utf8,${generateSvg(
                    randomPreset(seed)
                  )}`}
                />
              </div>
            </div>
          </div>
        </div>
    </CryptoPage>
  );
};

export default NFTMinter;
