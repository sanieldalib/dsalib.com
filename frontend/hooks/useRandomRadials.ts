import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import RANDOMRADIALS_ABI from "../contracts/RandomRadials.json";
import type { RandomRadials } from "../contracts/types";
import { ChainAddressMapping } from "../types/util";
import useContract from "./useContract";

// 
const contractForChain  = {
  3: '0x1d3d3046A8eB92f7909bbcceBB2eD1D61b74088B'
}

export default function useRandomRadials() {
  return useContract<RandomRadials>(contractForChain, RANDOMRADIALS_ABI);
}
