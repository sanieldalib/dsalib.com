import CryptoPage from "../../components/CryptoPage";
import { randomPreset, generateSvg, dateToString } from "../../artGenerator";
import { useState } from "react";

const NFTMinter = () => {
  const [seed, setSeed] = useState("");
  const [date, setDate] = useState(dateToString(new Date()));

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
              {date === dateToString(new Date()) && (
                <button className="mt-4 py-2 px-4 rounded-md dark:bg-green-500 dark:hover:bg-green-400 bg-green-300 hover:bg-green-200">
                  Mint
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </CryptoPage>
  );
};

export default NFTMinter;
