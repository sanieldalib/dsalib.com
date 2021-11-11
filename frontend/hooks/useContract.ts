import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";

export default function useContract<T extends Contract = Contract>(
  address: string,
  ABI: any
): T | null {
  const { library, account, chainId } = useWeb3React<Web3Provider>();

  return useMemo(() => {
    if (!address || !ABI || !library || !chainId || !account) {
      return null;
    }

    try {
      return new Contract(address, ABI, library.getSigner(account));
    } catch (error) {
      console.error("Failed To Get Contract", error);

      return null;
    }
  }, [address, ABI, library, account]) as T;
}
