import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import type { RandomRadials } from "../contracts/types";
import {
  RandomRadialTokenData,
  RandomRadialTokenUrl,
  RandomRadialUsage,
  RandomRadialTokenMetadata,
} from "../types/RandomRadials";
import useKeepSWRDataLiveAsBlocksArrive from "./useKeepSWRDataLiveAsBlocksArrive";
import useRandomRadials from "./useRandomRadials";
import useTokenContract from "./useRandomRadials";
import { AlchemyProvider } from "@ethersproject/providers";
import { Contract } from "ethers";
import { contractForChain } from "../hooks/useRandomRadials";
import RANDOMRADIALS_ABI from "../contracts/RandomRadials.json";

function getRandomRadialsTokenUrls(contract: RandomRadials) {
  return async (
    _: string,
    address: string
  ): Promise<RandomRadialTokenUrl[]> => {
    const balance = await contract.balanceOf(address);
    const ownedNFTs: RandomRadialTokenUrl[] = [];

    if (!balance || balance.isZero()) {
      return ownedNFTs;
    }

    for (var i = 0; balance.gt(i); i++) {
      const tokenId = await (
        await contract.tokenOfOwnerByIndex(address, i)
      ).toNumber();
      const tokenURI = await contract.tokenURI(tokenId);

      ownedNFTs.push({ tokenId, tokenURI });
    }
    return ownedNFTs;
  };
}
export function getUsersRandomRadials(suspense = false) {
  const { account } = useWeb3React<Web3Provider>();
  const provider = new AlchemyProvider("ropsten", process.env.ALCHEMY_API_KEY);
  const randomRadials = new Contract(
    contractForChain[3],
    RANDOMRADIALS_ABI,
    provider
  ) as RandomRadials;

  const shouldFetch = !!account && !!randomRadials;

  const { data, error } = useSWR(
    shouldFetch ? ["RandomRadialsHoldings", account] : null,
    getRandomRadialsTokenUrls(randomRadials!)
  );

  return {
    data: data,
    isLoading: !error && !data && shouldFetch,
    isError: error,
  };
}

function getRandomRadialsTokenUrlsAlchemy() {
  return async (): Promise<RandomRadialTokenUrl[]> => {
    const provider = new AlchemyProvider(
      "ropsten",
      process.env.ALCHEMY_API_KEY
    );
    const randomRadials = new Contract(
      contractForChain[3],
      RANDOMRADIALS_ABI,
      provider
    ) as RandomRadials;

    const nfts: RandomRadialTokenUrl[] = [];

    const minted = await (await randomRadials.totalSupply()).toNumber();

    for (var i = 0; minted > i; i++) {
      const tokenId = i;
      const tokenURI = await randomRadials.tokenURI(tokenId);

      nfts.push({ tokenId, tokenURI });
    }
    return nfts;
  };
}

export function getAllRandomRadials() {
  const { data, error } = useSWR(
    "AllRandomRadials",
    getRandomRadialsTokenUrlsAlchemy()
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function getOwnerforTokenId(contract: RandomRadials) {
  return async (_: string, tokenId: string): Promise<string> => {
    const owner = await contract.ownerOf(tokenId);
    return owner;
  };
}

export function getRandomRadialsOwner(tokenId: string) {
  const provider = new AlchemyProvider("ropsten", process.env.ALCHEMY_API_KEY);
  const randomRadials = new Contract(
    contractForChain[3],
    RANDOMRADIALS_ABI,
    provider
  ) as RandomRadials;

  const shouldFetch = !!randomRadials;

  const { data, error } = useSWR(
    shouldFetch ? ["RandomRadialsHoldings", tokenId] : null,
    getOwnerforTokenId(randomRadials!)
  );

  return {
    data: data,
    isLoading: !error && !data && shouldFetch,
    isError: error,
  };
}

function getUsage() {
  return async (): Promise<RandomRadialUsage> => {
    const provider = new AlchemyProvider(
      "ropsten",
      process.env.ALCHEMY_API_KEY
    );
    const randomRadials = new Contract(
      contractForChain[3],
      RANDOMRADIALS_ABI,
      provider
    ) as RandomRadials;

    const minted = (await randomRadials.totalSupply()).toNumber();
    const total = (await randomRadials.MAX_NFTS()).toNumber();
    return { minted, total };
  };
}

export function getRandomRadialsUsage() {
  const { data, error } = useSWR("RandomRadialsUsage", getUsage());

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

function getInfoForRandomRadial(contract: RandomRadials) {
  return async (tokenId: string): Promise<RandomRadialTokenData | number> => {
    const minted = (await contract.totalSupply()).toNumber() > Number(tokenId);
    if (!minted) {
      return 0;
    }

    const owner = await contract.ownerOf(tokenId);
    const tokenUri = await contract.tokenURI(tokenId);

    const [hash, path] = tokenUri.substring(7).split("/");
    const gatewayLink = `https://ipfs.io/ipfs/${hash}/${path}`;
    const metadataRes = await fetch(gatewayLink);
    const metadata: RandomRadialTokenMetadata = await metadataRes.json();

    return {
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
      tokenId,
      owner,
    };
  };
}

export function getRandomRadialsInfo(tokenId: string) {
  const provider = new AlchemyProvider("ropsten", process.env.ALCHEMY_API_KEY);
  const randomRadials = new Contract(
    contractForChain[3],
    RANDOMRADIALS_ABI,
    provider
  ) as RandomRadials;

  const shouldFetch = !!randomRadials;

  const { data, error } = useSWR(
    shouldFetch ? tokenId : null,
    getInfoForRandomRadial(randomRadials!)
  );

  console.log(data, error);

  // name: metadata.name,
  // description: metadata.description,
  // image: metadata.image,
  // tokenId: tokenId,
  // owner,

  return {
    data: data === 0 ? undefined : data,
    isLoading: !error && !data && shouldFetch,
    isError: error || data === 0,
  };
}
