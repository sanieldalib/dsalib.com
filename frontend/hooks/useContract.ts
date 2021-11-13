import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { CHAIN_NAMES } from "../util";

export default function useContract<T extends Contract = Contract>(
  addresses: any,
  ABI: any
): T | null {
  const { library, account, chainId } = useWeb3React<Web3Provider>();

  return useMemo(() => {
    if (!addresses || !ABI || !library || !chainId || !account) {
      return null;
    }

    try {
      const address = addresses[chainId];
      if (!!address) {
        return new Contract(address, ABI, library.getSigner(account));
      }
      return null;
    } catch (error) {
      console.error("Failed To Get Contract", error);

      return null;
    }
  }, [addresses, ABI, library, account, chainId]) as T;
}
