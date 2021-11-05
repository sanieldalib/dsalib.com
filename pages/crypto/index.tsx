import { useWeb3React } from "@web3-react/core";
import CryptoPage from "../../components/CryptoPage";
import Link from 'next/link';


const Crypto = () => {
  return (
      <CryptoPage title={"Crypto | dsalib.com"} walletModal>
        <div className="w-full">
          <div className="flex justify-center">
            <div className="px-4 py-4 lg:w-4/5">
              <h1>
                  <Link href='/crypto/nft'><a>NFT Minter</a></Link>
              </h1>
            </div>
          </div>
        </div>
      </CryptoPage>
  );
}

export default Crypto;
