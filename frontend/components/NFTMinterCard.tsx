import { randomPreset, generateSvg } from "../controllers/artGenerator";
import Link from "next/link";

const NFTMinterCard = () => {
  return (
    <Link href="/crypto/randomradials">
      <div className="md:mr-4 border-4 border-green-500 hover:shadow-md cursor-pointer transform duration-150 hover:scale-102">
        <img
          className="border-b-4 border-green-500"
          src={generateSvg(randomPreset("crypto"))}
        />
        <div className="p-4">
          <h1 className="text-2xl handwriting text-green-500">
            RandomRadials Minter
          </h1>
          <h2 className="text-md mt-2 text-gray-300 font-medium">
            Mint generative NFTs seeded on a string of text.
          </h2>
          <h2 className="text-md mt-2 text-gray-400">
            My first foray into Web3.
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default NFTMinterCard;
