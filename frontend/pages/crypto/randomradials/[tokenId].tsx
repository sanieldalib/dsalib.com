import Page from "../../../components/Page";
import { randomPreset, generateSvg } from "../../../controllers/artGenerator";
import { formatEtherscanLink } from "../../../util";
import { getRandomRadialsInfo } from "../../../hooks/getRandomRadials";
import { useRouter } from "next/router";
import Loader from "../../../components/Loader";

const RandomRadialPage = () => {
  const router = useRouter();
  const tokenId = router.query.tokenId as string;
  const { data, isLoading, isError } = getRandomRadialsInfo(tokenId);

  return isLoading && !isError ? (
    <Loader />
  ) : !!data && typeof data === "object" && !isError ? (
    <Page
      title={`#${tokenId} • ${data.name} | RandomRadials | dsalib.com`}
      description="RandomRadials are NFTs composed of randomly generated images seeded on a provided string."
      image={`https://dsalib.com/api/generate/${data.name}`}
    >
      <div className="w-full">
        <div className="flex flex-col lg:flex-row md:w-3/5 lg:w-5/6 px-6 py-2 items-center mx-auto md:mt-4 lg:my-8">
          <div className="w-full order-first lg:order-last">
            <div>
              <img
                className="mx-auto max-h-3/4 lg:ml-auto lg:mr-0 border-4 border-green-500 shadow-md lg:max-h-3/4"
                src={generateSvg(randomPreset(data.name))}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:mr-4 border-4 border-green-500 shadow-md p-4">
            <h1 className="text-3xl handwriting text-green-500">
              #{data.tokenId} • {data.name}
            </h1>
            <div className="flex flex-row items-baseline mt-2">
              <div className="bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-1 py-px mr-1 flex-grow-0 font-medium">
                Token ID
              </div>
              <h2 className="text-md text-gray-300">{data.tokenId}</h2>
            </div>
            <div className="flex flex-row items-baseline mt-2">
              <div className="hover:bg-green-100  bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-1 py-px mr-1 flex-grow-0 font-medium">
                Seed
              </div>
              <h2 className="text-md text-gray-300">{data.name}</h2>
            </div>
            <div className="flex flex-row items-baseline mt-2">
              <div className="hover:bg-green-100  bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-1 py-px mr-1 flex-grow-0 font-medium">
                Owner
              </div>
              <a
                href={formatEtherscanLink("Account", [3, data.owner])}
                target="_blank"
                className="overflow-scroll"
              >
                <h2 className="text-md w-auto text-green-300 hover:opacity-80 ">
                  {data.owner}
                </h2>
              </a>
            </div>
            <div className="flex flex-row items-baseline overflow-hidden">
              <div className="hover:bg-green-100  bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-1 py-px mr-1 flex-grow-0 font-medium">
                Description
              </div>
              <h2 className="text-md mt-2 text-gray-300">{data.description}</h2>
            </div>
          </div>
        </div>
      </div>
    </Page>
  ) : (
    <>{router.push("/crypto/randomradials")}</>
  );
};

export default RandomRadialPage;
