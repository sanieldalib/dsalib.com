import { randomPreset, generateSvg } from "../artGenerator";
import Link from "next/link";

const NFTMinterCard = () => {
  return (
    <Link href="/crypto/nft">
      <div className="md:mr-4 border-4 border-green-500 hover:shadow-md cursor-pointer transform duration-150 hover:scale-102">
        <img
          className="border-b-4 border-green-500"
          src={generateSvg(randomPreset("crypto"))}
        />
        <div className="p-4">
          <h1 className="text-3xl handwriting text-green-800 dark:text-green-500">
            Generative NFT Minter
          </h1>
          <h2 className="text-md mt-2 dark:text-gray-300 font-medium">
          Generated NFTs seeded on the date + your text
          </h2>
          <h2 className="text-md mt-2 dark:text-gray-400">
              My first forray into Web3.
          </h2>
          <h2 className="text-center text-sm mt-6 dark:text-gray-400">
              (Psst...the one seen here uses the seedphrase 'crypto'.)
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default NFTMinterCard;
