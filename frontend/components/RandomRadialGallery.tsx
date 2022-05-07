import { generateSvg, randomPreset } from "../controllers/artGenerator";
import useIPFS from "../hooks/useIPFS";
import {
  getAllRandomRadials,
  getUsersRandomRadials,
} from "../hooks/getRandomRadials";
import Loader from "./Loader";
import { RandomRadialTokenUrl } from "../types/RandomRadials";
import { scrollToTop } from "../utils";
import Link from "next/link";

const RandomRadialImage = (props: RandomRadialTokenUrl) => {
  const { data, isError, isLoading } = useIPFS(props.tokenURI);

  if (isError) {
    return <div>error</div>;
  }

  return (
    <Link href={`/crypto/randomradials/${props.tokenId}`}>
      <div className="border-4 border-green-500 hover:shadow-md cursor-pointer transform duration-150 hover:scale-102">
        {data ? (
          <img
            className="border-b-4 border-green-500"
            src={generateSvg(randomPreset(data.name))}
          />
        ) : (
          <Loader />
        )}
        <div className="p-4">
          <h1 className="text-lg font-medium text-green-500">
            #{props.tokenId} • {data?.name}
          </h1>
        </div>
      </div>
    </Link>
  );
};

type RandomRadialGalleryProps = {
  owned?: boolean;
};

const RandomRadialGallery = (props: RandomRadialGalleryProps) => {
  const { data, isLoading, isError } = props.owned
    ? getUsersRandomRadials()
    : getAllRandomRadials();

  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold text-green-500 text-center">
        {props.owned ? "Your" : "All"} RandomRadials
      </h1>
      <div className="mt-8">
        {data ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.length > 0 ? (
              data.map((metadata) => <RandomRadialImage {...metadata} />)
            ) : (
              <div
                className="text-center text-2x mt-8 text-gray-300 transform duration-150 hover:scale-105 cursor-pointer"
                onClick={scrollToTop}
              >
                😢 Mint one today!
              </div>
            )}
          </div>
        ) : isLoading ? (
          <Loader />
        ) : (
          <div
            className="text-center text-2xl mt-8 text-gray-300 transform duration-150 hover:scale-105 cursor-pointer"
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
