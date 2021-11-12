import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "ethers";
import useSWR from "swr";
import type { RandomRadials } from "../contracts/types";
import { RandomRadialTokenUrl } from "../types/RandomRadials";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useRandomRadials from "./useRandomRadials";
import useTokenContract from "./useRandomRadials";


function getRandomRadialsTokenUrls(contract: RandomRadials) {
  return async (_: string, address: string): Promise<RandomRadialTokenUrl[]> => {
    const balance = await contract.balanceOf(address);
    const ownedNFTs: RandomRadialTokenUrl[] = [];

    if (!balance || balance.isZero()) {
      return ownedNFTs;
    }

    for (var i = 0; balance.gt(i); i++) {
      const tokenId = await contract.tokenOfOwnerByIndex(address, i);
      const tokenURI = await contract.tokenURI(tokenId);

      ownedNFTs.push({tokenId, tokenURI});
    }
    return ownedNFTs;
  };
}

export default function getUsersRandomRadials(suspense = false) {
  const { account } = useWeb3React<Web3Provider>();
  const contract = useRandomRadials();

  const shouldFetch = !!account && !!contract;

  const { data, error } = useSWR(
    shouldFetch ? ["RandomRadialsHoldings", account] : null,
    getRandomRadialsTokenUrls(contract!)
  );

  // useKeepSWRDataLiveAsBlocksArrive(da.mutate);


  return {
    data: data,
    isLoading: !error && !data && shouldFetch,
    isError: error
  };
}
