import { useWeb3React } from "@web3-react/core";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Account from "./Account";

type ConnectWalletDialogProps = {
  isConnected: boolean
}

const ConnectWalletDialog: React.FC<ConnectWalletDialogProps> = (props) => {
  const [isOpen, updateOpen] = useState(!props.isConnected);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {}}
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
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  ⚡ Welcome to the Crypto Zone!
                </Dialog.Title>

                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    For the best experience, please connect your wallet.
                  </p>
                </div>

                <div className="mt-4 flex flex-row space-x-2">
                  <div className="text-">
                    <Account />
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 text-md font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-green-500"
                    onClick={() => {updateOpen(false)}}
                  >
                    Just looking!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ConnectWalletDialog;