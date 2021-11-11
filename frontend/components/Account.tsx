import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useState, useRef } from "react";
import { injected } from "../connectors";
import useENSName from "../hooks/useENSName";
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding";
import { formatEtherscanLink, shortenHex, parseBalance } from "../util";
import { BiLinkExternal } from "react-icons/bi";
import ETHBalance from "./ETHBalance";
import { Web3Provider } from "@ethersproject/providers";

const Account = () => {
  const { active, error, activate, chainId, account, setError, deactivate } =
    useWeb3React<Web3Provider>();

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  const [openMenu, toggleMenu] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);

  const ENSName = useENSName(account);

  // Setup to support clicking outside menu to close
  const node = useRef<HTMLDivElement>(null);
  const handleClick = (e: any) => {
    if (node.current && node.current.contains(e.target)) {
      return;
    }

    toggleMenu(false)

  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [])

  if (error) {
    return null;
  }

  if (typeof account !== "string") {
    return (
      <div>
        {isWeb3Available ? (
          <button
            className="bg-green-100 dark:bg-green-400 dark:hover:bg-green-300 rounded-md hover:bg-green-200 text-green-900 px-2 py-2 text-md cursor-pointer font-medium"
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
                <img className="w-5 h-5 mr-1" src="/metamask.svg"></img>{" "}
                <div>Connect to MetaMask</div>
              </div>
            ) : (
              "Connect to Wallet"
            )}
          </button>
        ) : (
          <button
            className="bg-green-100 hover:bg-green-200 dark:bg-green-400 dark:hover:bg-green-300 text-green-900 px-2 py-2 text-md cursor-pointer flex-grow font-medium rounded-md"
            onClick={startOnboarding}
          >
            <div className="flex flex-row items-center">
              <img className="w-5 h-5 mr-1" src="/metamask.svg"></img>{" "}
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
    <div className="relative">
      <div className="rounded-md flex flex-row items-center border-2 border-green-300 dark:border-green-400 dark:bg-green-100 font-medium">
        <div className="text-black-800 px-2 text-md flex-grow">
          <ETHBalance />
        </div>
        <div
          onClick={() => toggleMenu(!openMenu)}
          className="flex-grow"
        >
          <div className="bg-green-200 hover:bg-green-300  dark:bg-green-400 dark:hover:bg-green-300 text-green-800 px-2 py-1 text-md cursor-pointer flex-grow rounded-r-md">
            <div className="flex flex-row items-center justify-center">
              <img className="w-4 h-4 mr-2" src="/metamask.svg"></img>{" "}
              <div>{ENSName || `${shortenHex(account, 4)}`}</div>
            </div>
          </div>
        </div>
      </div>
      {openMenu && (
        <div ref={node} className="absolute rounded-md mt-2 right-0 flex flex-col border border-green-800 text-green-800 text-md md:w-max w-full">
          <a onClick={deactivate} className="bg-green-100 hover:bg-green-200 text-green-900 px-2 py-2 text-md cursor-pointer font-medium rounded-t-md text-center">
            Disconnect Wallet
          </a>
          <a
            {...{
              href: formatEtherscanLink("Account", [chainId, account]),
              target: "_blank",
              rel: "noopener noreferrer",
            }}
            className="flex flex-row items-center bg-green-100  hover:bg-green-200 text-green-900 px-2 py-2 text-md cursor-pointer flex-grow font-medium rounded-b-md text- justify-center"
          >
            Etherscan
            <div className="ml-2">
              <BiLinkExternal />
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Account;
