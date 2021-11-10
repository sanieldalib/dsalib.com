import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";

function getBlockNumber(library: Web3Provider | undefined) {
  return async () => {
    if (!library) { return undefined}
    return library.getBlockNumber();
  };
}

export default function useBlockNumber() {
  const { library } = useWeb3React<Web3Provider>();
  const shouldFetch = !!library && library;

  return useSWR(shouldFetch ? ["BlockNumber"] : null, getBlockNumber(library), {
    refreshInterval: 10 * 1000,
  });
}
