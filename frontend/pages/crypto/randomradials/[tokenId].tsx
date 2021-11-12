import { AlchemyProvider } from "@ethersproject/providers";
import { Contract } from "ethers";
import { RandomRadials } from "../../../contracts/types";
import { contractForChain } from "../../../hooks/useRandomRadials";
import RANDOMRADIALS_ABI from "../../../contracts/RandomRadials.json";
import { GetStaticProps, GetStaticPaths, GetStaticPropsResult } from "next";
import { ParsedUrlQuery } from "querystring";
import { RandomRadialTokenMetadata } from "../../../types/RandomRadials";
import Page from "../../../components/Page";
import { randomPreset, generateSvg } from "../../../controllers/artGenerator";
import { formatEtherscanLink } from "../../../util";

interface IParams extends ParsedUrlQuery {
  tokenId: string;
}

type RandomRadialStaticPath = { params: { tokenId: string } };

type RandomRadialStaticProps = {
  name: string;
  description: string;
  image: string;
  owner: string;
  tokenId: string;
};

export const staticPageGenerationTimeout = "120";

export const getStaticPaths: GetStaticPaths = async () => {
  const provider = new AlchemyProvider("ropsten", process.env.ALCHEMY_API_KEY);
  const randomRadials = new Contract(
    contractForChain[3],
    RANDOMRADIALS_ABI,
    provider
  ) as RandomRadials;

  const minted = (await randomRadials.totalSupply()).toNumber();

  const paths: RandomRadialStaticPath[] = [];

  for (var i = 0; i < minted; i++) {
    paths.push({ params: { tokenId: `${i}` } });
  }

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<RandomRadialStaticProps>> => {
  const provider = new AlchemyProvider("ropsten", process.env.ALCHEMY_API_KEY);
  const randomRadials = new Contract(
    contractForChain[3],
    RANDOMRADIALS_ABI,
    provider
  ) as RandomRadials;

  const { tokenId } = context.params as IParams;
  const tokenUri = await randomRadials.tokenURI(tokenId);
  const owner = await randomRadials.ownerOf(tokenId);

  const [hash, path] = tokenUri.substring(7).split("/");
  const gatewayLink = `https://${hash}.ipfs.dweb.link/${path}`;
  const metadataRes = await fetch(gatewayLink);
  const metadata: RandomRadialTokenMetadata = await metadataRes.json();

  return {
    props: {
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
      tokenId: tokenId,
      owner,
    },
  };
};

const RandomRadialPage = (props: RandomRadialStaticProps) => {
  return (
    <Page
      title={`#${props.tokenId} • ${props.name} | RandomRadials | dsalib.com`}
      description="RandomRadials are NFTs composed of randomly generated images seeded on a provided string."
      image={`https://dsalib.com/api/generate/${props.name}`}
    >
      <div className="w-full">
        <div className="flex flex-col lg:flex-row md:w-3/5 lg:w-5/6 px-6 py-2 items-center mx-auto md:mt-4 lg:my-8">
          <div className="w-full order-first lg:order-last">
            <div>
              <img
                className="mx-auto max-h-3/4 lg:ml-auto lg:mr-0 border-4 border-green-500 shadow-md lg:max-h-3/4"
                src={generateSvg(randomPreset(props.name))}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:mr-4 border-4 border-green-500 shadow-md p-4">
            <h1 className="text-3xl handwriting text-green-800 dark:text-green-500">
              #{props.tokenId} • {props.name}
            </h1>
            <div className="flex flex-row items-baseline mt-2">
              <div className="bg-green-50 hover:bg-green-100  text-green-900 dark:bg-gray-700 dark:text-green-500 dark:hover:text-green-800 rounded-md px-1 py-px mr-1 flex-grow-0 font-medium">
                Token ID
              </div>
              <h2 className="text-md text-gray-800 dark:text-gray-300">
                {props.tokenId}
              </h2>
            </div>
            <div className="flex flex-row items-baseline mt-2">
              <div className="bg-green-50 hover:bg-green-100  text-green-900 dark:bg-gray-700 dark:text-green-500 dark:hover:text-green-800 rounded-md px-1 py-px mr-1 flex-grow-0 font-medium">
                Seed
              </div>
              <h2 className="text-md text-gray-800 dark:text-gray-300">
                {props.name}
              </h2>
            </div>
            <div className="flex flex-row items-baseline mt-2">
              <div className="bg-green-50 hover:bg-green-100  text-green-900 dark:bg-gray-700 dark:text-green-500 dark:hover:text-green-800 rounded-md px-1 py-px mr-1 flex-grow-0 font-medium">
                Owner
              </div>
              <a
                href={formatEtherscanLink("Account", [3, props.owner])}
                target="_blank"
                className="overflow-scroll"
              >
                <h2 className="text-md w-auto text-green-900 dark:text-green-300 hover:opacity-80 ">
                  {props.owner}
                </h2>
              </a>
            </div>
            <div className="flex flex-row items-baseline overflow-hidden">
              <div className="bg-green-50 hover:bg-green-100  text-green-900 dark:bg-gray-700 dark:text-green-500 dark:hover:text-green-800 rounded-md px-1 py-px mr-1 flex-grow-0 font-medium">
                Description
              </div>
              <h2 className="text-md mt-2 text-gray-800 dark:text-gray-300">
                {props.description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default RandomRadialPage;
