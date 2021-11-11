import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import type { RandomRadials } from "../contracts/types";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useRandomRadials from "./useRandomRadials";
import useTokenContract from "./useRandomRadials";

function getRandomRadials(contract: RandomRadials) {
  return async (_: string, address: string): Promise<string[]> => {
    const balance = await contract.balanceOf(address);
    const ownedNFTs: string[] = [];

    if (!balance || balance.isZero()) {
      return ownedNFTs;
    }

    for (var i = 0; balance.gt(i); i++) {
      const tokenId = await contract.tokenOfOwnerByIndex(address, i);
      const metadata = await contract.tokenURI(tokenId);
      ownedNFTs.push(metadata);
    }
    return ownedNFTs;
  };
}

export default function getUsersRandomRadials(suspense = false) {
  const { account } = useWeb3React<Web3Provider>();
  const contract = useRandomRadials();

  const shouldFetch = !!account && !!contract;

  const result = useSWR(
    shouldFetch ? ["RandomRadialsHoldings", account] : null,
    getRandomRadials(contract!),
    {
      suspense,
    }
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result.data;
}
