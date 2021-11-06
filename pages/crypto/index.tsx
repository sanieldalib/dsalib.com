import CryptoPage from "../../components/CryptoPage";
import NFTMinterCard from "../../components/NFTMinterCard";

const Crypto = () => {
  return (
    <CryptoPage title={"Crypto | dsalib.com"} walletModal>
      <div className="w-full">
        <div className="flex justify-center">
          <div className="px-4 py-4 lg:w-4/5">
            <h1>
              <div className="w-full md:w-2/5">
              <NFTMinterCard/></div>
            </h1>
          </div>
        </div>
      </div>
    </CryptoPage>
  );
};

export default Crypto;
