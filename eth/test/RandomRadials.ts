import { expect } from "chai";
import exp from "constants";
import { Signer, ContractFactory, BigNumber } from "ethers";
import { run, ethers } from "hardhat";
import { before } from "mocha";
import { RandomRadials } from "../types/RandomRadials";

// RandomRadial total supply for testing
const MAX_NFTS = 100;

describe("RandomRadials NFT", () => {
  let accounts: Signer[];
  let contractFactory: ContractFactory;
  let RandomRadials: RandomRadials;

  beforeEach(async () => {
    contractFactory = await ethers.getContractFactory("RandomRadials");
    accounts = await ethers.getSigners();

    RandomRadials = (await contractFactory.deploy(MAX_NFTS)) as RandomRadials;
  });

  describe("Deployment", () => {
    it("Test max supply is correctly set to MAX_NFTS var", async function () {
      const maxNFTs = await RandomRadials.MAX_NFTS();
      expect(maxNFTs).to.equal(MAX_NFTS);
    });

    it("Test first mint has ID 0 and has testURI data", async function () {
      const testURI = "ipfs://testuri";
      const tokenId: BigNumber = await (
        await RandomRadials.mintRandomRadial(testURI)
      ).value;
      const tokenURI = await RandomRadials.tokenURI(0);
      expect(tokenId).to.equal(0);
      expect(tokenURI).to.equal(testURI);
    });
  });

  describe("Minting", () => {
    it("Test minting goes to message sender", async () => {
      const testURI = "ipfs://testuri";
      const addr1 = accounts[1];

      // Switch to non owner account to mint
      await RandomRadials.connect(addr1).mintRandomRadial(testURI);

      expect(await RandomRadials.ownerOf(0)).to.eq(await addr1.getAddress());
      expect(await RandomRadials.balanceOf(await addr1.getAddress())).to.eq(1);
    });

    it("Test minting more than MAX_NFTS results in failure", async () => {
      const testURI = "ipfs://testuri";

      // Mint MAX_NFT times
      for (var i = 0; i < MAX_NFTS; i++) {
        await RandomRadials.mintRandomRadial(testURI);
      }

      await expect(RandomRadials.mintRandomRadial(testURI)).to.be.revertedWith(
        "All RandomRadials have been minted."
      );
    });
  });
});
