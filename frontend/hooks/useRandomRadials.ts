import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import RANDOMRADIALS_ABI from "../contracts/RandomRadials.json";
import type { RandomRadials } from "../contracts/types";
import { ChainAddressMapping } from "../types/util";
import useContract from "./useContract";

// 
const contractForChain  = {
  3: '0x60Aca77d887D62ce50ED06e8E3E656559Ca48Ab8'
}

export default function useRandomRadials() {
  return useContract<RandomRadials>(contractForChain, RANDOMRADIALS_ABI);
}
