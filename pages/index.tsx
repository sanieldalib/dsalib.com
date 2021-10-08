import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import { Socials } from "../components/Socials";
import { randomGreeting } from "../utils";
import Link from "next/dist/client/link";
import NewsItem from "../components/NewsItem";

const Home: NextPage = () => {
  return (
    <div>
      <Page title={"Daniel Salib"}>
        {/* Hello - Intro Section */}
        <div className="w-full p-4 bg-gray-100">
          <div className="flex justify-center">
            <div className="rounded-lg flex flex-col lg:w-3/5">
              <div className="flex-shrink-0 pt-2 mb-2">
                <img
                  className="rounded-full w-36 h-36 mx-auto"
                  src="/dsalib.png"
                />
              </div>
              <div className="md:ml-4">
                <h1 className="text-4xl font-semibold text-center handwriting">
                  {randomGreeting()}
                </h1>
                <p className="text-lg text-center pt-2">
                  Welcome to my online space and thanks for stopping by! This
                  space is an ongoing work and will be updated frequently. Check
                  back often for new things!
                </p>
                <div className="mt-4">
                  <Socials center />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="flex justify-center">
            <div className="lg:w-3/5 justify-center">
              <h1 className="handwriting text-2xl mb-4">Latest Changes </h1>
              <NewsItem
                title="📝 Experiences Updated"
                href="/experience"
                subtitle="Experiences have been updated to reflect Daniel's changes in employment."
                linkText="Visit Experience Page"
                date="October 7, 2021"
              />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Home;
