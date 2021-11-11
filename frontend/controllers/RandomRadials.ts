import { RandomRadials } from "../contracts/types/RandomRadials"
import useContract from "../hooks/useContract"
import RANDOMRADIALS_ABI from "../contracts/RandomRadials.json";

const contractAddress = '0x1d3d3046A8eB92f7909bbcceBB2eD1D61b74088B'

export const mintRandomRadial = (tokenUri: string) => {
    const randomRadials = useContract<RandomRadials>(contractAddress, RANDOMRADIALS_ABI);
    randomRadials?.mintRandomRadial(tokenUri);
}