import { generateSvg, randomPreset } from "../controllers/artGenerator";
import useIPFS from "../hooks/useIPFS";
import getUsersRandomRadials from "../hooks/getRandomRadials";
import Loader from "./Loader";
import { RandomRadialTokenUrl } from "../types/RandomRadials";
import { scrollToTop } from "../utils";

type RandomRadialProps = {
  metadata: RandomRadialTokenUrl;
};

const RandomRadialImage = (props: RandomRadialProps) => {
  const { data, isError, isLoading } = useIPFS(props.metadata.tokenURI);

  if (isError) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="border-4 border-green-500 hover:shadow-md cursor-pointer transform duration-150 hover:scale-102">
      {data?.name ? (
        <img
          className="border-b-4 border-green-500"
          src={generateSvg(randomPreset(data.name))}
        />
      ) : (
        <Loader />
      )}
      <div className="p-4">
        <h1 className="text-lg handwriting text-green-800 dark:text-green-500">
          #{props.metadata.tokenId.toNumber()} • {data?.name}
        </h1>
      </div>
    </div>
  );
};

const RandomRadialGallery = () => {
  const { data, isLoading, isError } = getUsersRandomRadials();

  return (
    <div className="w-full">
      <h1 className="text-4xl handwriting text-green-800 dark:text-green-500 text-center">
        Your Random Radials
      </h1>
      <div className="mt-4">
        {data ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.length > 0 ? (
              data.map((metadata) => <RandomRadialImage metadata={metadata} />)
            ) : (
              <div
                className="text-center text-2xl mt-8 text-gray-700 dark:text-gray-300 transform duration-150 hover:scale-105 cursor-pointer"
                onClick={scrollToTop}
              >
                😢 Mint one today!
              </div>
            )}
          </div>
        ) : isLoading ? <Loader/> :(
          <div
            className="text-center text-2xl mt-8 text-gray-700 dark:text-gray-300 transform duration-150 hover:scale-105 cursor-pointer"
            onClick={scrollToTop}
          >
            😢 Mint one today!
          </div>
        )}
      </div>
    </div>
  );
};
export default RandomRadialGallery;
