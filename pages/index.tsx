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
      <Page title={"Home | Daniel Salib"}>
        {/* Hello - Intro Section */}
        <div className="w-full p-4 bg-gray-100 dark:bg-gray-800">
          <div className="flex justify-center">
            <div className="rounded-lg flex flex-col lg:w-3/5">
              <div className="flex-shrink-0 pt-2 mb-2">
                <img
                  className="rounded-full w-36 h-36 mx-auto"
                  src="/dsalib.png"
                />
              </div>
              <div className="md:ml-4">
                <h1 className="text-4xl font-semibold text-center handwriting text-green-800 dark:text-green-600">
                Hey there, I'm Daniel! 
                </h1>
                <p className="text-lg text-center pt-2 dark:text-gray-400">
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

        <div className="w-full p-4  bg-white dark:bg-shadow-black">
          <div className="flex justify-center">
            <div className="lg:w-3/5 justify-center">
              <h1 className="handwriting text-2xl mb-4 dark:text-gray-300">Latest Changes </h1>
              <NewsItem
                title="🤑 Crypto Integration"
                href="/crypto"
                subtitle={`Integration with <span className="bg-green-50 hover:bg-green-100">
                <span><img class='w-6 h-6 inline-block' src='/metamask.svg'></span> MetaMask has been added - Web3 dApp coming soon.`}
                linkText="Visit"
                date="November 4, 2021"
              />
              <br />
              <NewsItem
                title="📝 Experiences Updated"
                href="/experience"
                subtitle="Experiences have been updated to reflect Daniel's changes in employment."
                linkText="Visit"
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
