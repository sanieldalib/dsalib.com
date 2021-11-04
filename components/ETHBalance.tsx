import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useETHBalance from "../hooks/useETHBalance";
import { parseBalance } from "../util";

const ETHBalance = () => {
  const { account } = useWeb3React<Web3Provider>();

  return <div>{`Ξ ${account ? parseBalance(useETHBalance(account).data) : 0}`}</div>;
};

export default ETHBalance;
