import { useWeb3React } from "@web3-react/core";
import Page from "../components/Page";
import useEagerConnect from "../hooks/useEagerConnect";
import { CHAIN_NAMES } from "../util";
import ConnectWalletDialog from "./ConnectWalletDialog";

type PageProps = {
  title?: string;
  description?: string;
  walletModal?: boolean;
  eagerConnect?: boolean;
};

const CryptoPage: React.FC<PageProps> = (props) => {
  const { account, library, chainId } = useWeb3React();
  const isConnected = typeof account === "string" && !!library;
  let eagerConnectAttempted;
  if (props.eagerConnect) {
    eagerConnectAttempted = useEagerConnect();
  }
  return (
    <div
      className={`${
        chainId && isConnected && chainId > 1 && `border-8 border-blue-600`
      } min-h-full`}
    >
      {/* Awaits eager connect to finish before displaying dialog */}
      {props.eagerConnect
        ? props.walletModal &&
          eagerConnectAttempted &&
          !isConnected && <ConnectWalletDialog isConnected={isConnected} />
        : props.walletModal &&
          !isConnected && <ConnectWalletDialog isConnected={isConnected} />}
      <Page {...props}>
        {chainId && isConnected && typeof chainId === "number" && (
          <div
            className={`text-white ${
              chainId === 1 ? "bg-green-800 px-1" : "bg-blue-600 pr-1"
            } fixed bottom-0 font-bold`}
          >
            {CHAIN_NAMES[chainId]}
          </div>
        )}
        {props.children}
      </Page>
    </div>
  );
};

export default CryptoPage;
