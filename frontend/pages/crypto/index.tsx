import CryptoPage from "../../components/CryptoPage";
import NFTMinterCard from "../../components/NFTMinterCard";

const Crypto = () => {
  return (
    <CryptoPage title={"Crypto | dsalib.com"} walletModal>
      <div className="lg:w-4/5 xl:3/5 mx-auto">
        <div className="flex justify-center px-4 py-4">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <NFTMinterCard />
          </div>
        </div>
      </div>
    </CryptoPage>
  );
};

export default Crypto;
