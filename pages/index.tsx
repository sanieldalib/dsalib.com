import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import { Socials } from "../components/Socials";
import { randomGreeting } from "../utils";

const Home: NextPage = () => {
  return (
    <div>
      <Page title={"Daniel Salib"}>
        <Navbar />

        {/* Hello - Intro Section */}
        <div className="w-full py-4 bg-gray-100">
          <div className="flex justify-center">
            <div className="rounded-lg flex flex-col md:flex-row px-8 py-4 md:w-3/4">
              <div className="flex-shrink-0 pt-2 mb-2">
                <img
                  className="rounded-full w-36 h-36 mx-auto"
                  src="/dsalib.png"
                />
              </div>
              <div className="ml-2 px-4">
                <h1 className="text-4xl font-bold text-center md:text-left">
                  {randomGreeting()}
                </h1>
                <p className="text-center md:text-left">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="md:hidden mt-4"><Socials center/></div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Home;
