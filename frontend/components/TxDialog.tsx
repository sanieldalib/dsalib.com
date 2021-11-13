import { useWeb3React } from "@web3-react/core";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Account from "./Account";
import { CHAIN_NAMES, formatEtherscanLink, shortenHex } from "../util";
import { Web3Provider } from "@ethersproject/providers";
export type TxDialogProps = { chainId: number; hash: string };

const TxDialog = (props: TxDialogProps) => {
  let [isOpen, setIsOpen] = useState(true);
  const { chainId } = useWeb3React<Web3Provider>();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 opacity-40 bg-gray-600 dark:bg-gray-800" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-shadow-black shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  ⌛ Your Transaction is Processesing...
                </Dialog.Title>

                <div className="mt-4">
                  <p className="text-md text-gray-500 dark:text-gray-400">
                    Your transaction,
                    <a
                      href={formatEtherscanLink("Transaction", [
                        props.chainId,
                        props.hash,
                      ])}
                      target="_blank"
                    >
                      <span className="bg-gray-100 dark:bg-gray-700 hover:opacity-90 dark:text-white p-1 rounded-lg mx-0.5 ">
                        {shortenHex(props.hash, 10)}
                      </span>
                    </a>{" "}
                    is queued and pending.
                  </p>
                </div>

                <div className="mt-6 flex flex-row space-x-2 w-full">
                  <div className="text-">
                    <a
                      href={formatEtherscanLink("Transaction", [
                        props.chainId,
                        props.hash,
                      ])}
                      target="_blank"
                      type="button"
                      className="bg-green-100 dark:bg-green-400 dark:hover:bg-green-300 rounded-md hover:bg-green-200 text-green-900 px-2 py-2 text-md cursor-pointer font-medium"
                    >
                      View on EtherScan
                    </a>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 text-md font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-green-500"
                    onClick={closeModal}
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default TxDialog;
