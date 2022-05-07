import { scrollToTop } from "../utils";
import DSLink from "./DSLink";
const Footer = () => {
  return (
    <div className="w-screen">
      <div className="flex justify-between text-green-50 p-4 lg:w-4/5 xl:w-4/6 mx-auto pb-8">
        <button
          className="bg-gray-700 text-green-500 hover:text-green-400 hover:bg-gray-600 rounded-md px-1 py-px"
          onClick={scrollToTop}
        >
          Back to top
        </button>
        <p className="text-gray-400">
          <DSLink href="mailto:danielsalib98@gmail.com" className="px-1 py-0.5">
            Daniel Salib
          </DSLink>{" "}
          ©{` ${new Date().getFullYear()}`}
        </p>
      </div>
    </div>
  );
};

export default Footer;
