import { BigNumber } from "ethers";

export type RandomRadialTokenUrl = {
  tokenId: number;
  tokenURI: string;
};

export type RandomRadialUsage = {
  minted: number;
  total: number;
};

export type RandomRadialTokenMetadata = {
  name: string;
  description: string;
  image: string;
};

export type RandomRadialTokenData = {
  name: string;
  description: string;
  image: string;
  tokenId: string;
  owner: string;
};
