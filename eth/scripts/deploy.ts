import { run, ethers } from "hardhat";
import { RandomRadials } from "../types/RandomRadials";

const MAX_RANDOM_RADIALS = 10000;

const deployRandomRadials = async () => {
    console.log("Running 'npx hardhat clean'...")
    await run("clean");
    console.log("Running 'npx hardhat compile'...")
    await run("compile");

    const [deployer] = await ethers.getSigners();

    console.log("Deploying Random Radials with the account: ", deployer.address)
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const contractFactory = await ethers.getContractFactory("RandomRadials");
    const RandomRadials = await contractFactory.deploy(MAX_RANDOM_RADIALS) as RandomRadials
    
    console.log("Max Random Radials on contract: ", await RandomRadials.MAX_NFTS());
}

deployRandomRadials()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });