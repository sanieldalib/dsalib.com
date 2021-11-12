import { BigNumber } from "ethers";

export type RandomRadialTokenUrl = {
  tokenId: BigNumber;
  tokenURI: string;
};

export type RandomRadialUsage = {
  minted: number;
  total: number;
};
