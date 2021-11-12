import RANDOMRADIALS_ABI from "../contracts/RandomRadials.json";
import type { RandomRadials } from "../contracts/types";
import useContract from "./useContract";

export const contractForChain = {
  3: "0x60Aca77d887D62ce50ED06e8E3E656559Ca48Ab8",
};

export default function useRandomRadials() {
  return useContract<RandomRadials>(contractForChain, RANDOMRADIALS_ABI);
}
