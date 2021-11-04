import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";
import { injected } from "../connectors";
import useENSName from "../hooks/useENSName";
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding";
import { formatEtherscanLink, shortenHex, parseBalance } from "../util";
import { BiLinkExternal } from "react-icons/bi";
import ETHBalance from "./ETHBalance";

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account = ({ triedToEagerConnect }: AccountProps) => {
  const { active, error, activate, chainId, account, setError } =
    useWeb3React();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  const ENSName = useENSName(account);

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== "string") {
    return (
      <div>
        {isWeb3Available ? (
          <button
            className="bg-green-100  rounded-md hover:bg-green-200 text-green-900 px-2 py-2 text-md cursor-pointer flex-grow font-medium"
            disabled={connecting}
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {isMetaMaskInstalled ? (
              <div className="flex flex-row items-center">
                <img className="w-5 h-5 mr-1" src="metamask.svg"></img>{" "}
                <div>Connect to MetaMask</div>
              </div>
            ) : (
              "Connect to Wallet"
            )}
          </button>
        ) : (
          <button
            className="bg-green-100  rounded-md hover:bg-green-200 text-green-900 px-2 py-2 text-md cursor-pointer flex-grow font-medium rounded-md"
            onClick={startOnboarding}
          >
              <div className="flex flex-row items-center">
                <img className="w-5 h-5 mr-1" src="metamask.svg"></img>{" "}
                <div>Install MetaMask</div>
              </div>
          </button>
        )}
      </div>
    );
  }

  if (!chainId) {
    return null;
  }

  return (
    <div className="flex flex-row items-center border border-green-800 border-opacity-50 font-medium">
      <div className="text-black-800 px-2 text-md flex-grow">
        <ETHBalance />
      </div>
      <a
        {...{
          href: formatEtherscanLink("Account", [chainId, account]),
          target: "_blank",
          rel: "noopener noreferrer",
        }}
      >
        <div className="bg-gray-100 hover:bg-gray-200 text-green-800 px-2 py-2 text-md cursor-pointer flex-grow">
          <div className="flex flex-row items-center justify-center">
            <img className="w-4 h-4 mr-2" src="metamask.svg"></img>{" "}
            <div>{ENSName || `${shortenHex(account, 4)}`}</div>
            <div className="ml-2">
              <BiLinkExternal />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Account;