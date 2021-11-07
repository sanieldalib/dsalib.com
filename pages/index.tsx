import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import { Socials } from "../components/Socials";
import { randomGreeting } from "../utils";
import Link from "next/dist/client/link";
import NewsItem from "../components/NewsItem";
import DSLink from "../components/DSLink";
import NFTMinterCard from "../components/NFTMinterCard";

const Home: NextPage = () => {
  return (
    <div>
      <Page title={"Home | Daniel Salib"}>
        {/* Hello - Intro Section */}
        <div className="w-full p-4 bg-gray-200 dark:bg-gray-800">
          <div className="rounded-lg flex flex-col lg:flex-row lg:w-4/5 xl:w-3/5 items-center lg:space-x-10 mx-auto py-4 lg:py-16">
            <div className="flex-shrink-0 pt-2 mb-2">
              <img
                className="rounded-full w-36 h-36 mx-auto"
                src="/dsalib.png"
              />
              <div className="mt-4 invisible lg:visible">
                <Socials center />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-center lg:text-left handwriting text-green-800 dark:text-green-600">
                Hey there, I'm Daniel!
              </h1>
              <p className="text-lg pt-2 text-center lg:text-left dark:text-gray-400">
                I am currently a Software Engineer at{" "}
                <DSLink href="https://www.atlassian.com">Atlassian</DSLink>{" "}
                working on CI/CD for mobile teams. I studied statistics, data
                science, and computer science at{" "}
                <DSLink href="https://upenn.edu">UPenn</DSLink>. In my free
                time, I enjoy{" "}
                <DSLink href="https://www.strava.com/athletes/3343611">
                  cycling
                </DSLink>
                , snowboarding, learning new things, and visiting new places.
              </p>
              <p className="text-lg pt-2 text-center lg:text-left dark:text-gray-400 font-semibold">
                This site serves as both a portfolio and a creative space. As a
                result, it is an ongoing work and will be updated frequently.
                Check back often for new things!
              </p>
            </div>
            <div className="mt-4 lg:hidden">
              <Socials center />
            </div>
          </div>
        </div>

        <div className="w-full p-4 mt-2 bg-white dark:bg-shadow-black">
          <div className="flex justify-center">
            <div className="lg:w-4/5 xl:w-3/5 justify-center">
              <h1 className="handwriting text-2xl mb-4 dark:text-gray-300">
                Latest Changes
              </h1>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <NewsItem
                title="⚡ Crypto Integration"
                href="/crypto"
                subtitle={`Integration with <span className="bg-green-50 hover:bg-green-100">
                <span><img class='w-6 h-6 inline-block' src='/metamask.svg'></span> MetaMask has been added - Web3 dApp coming soon.`}
                linkText="Visit"
                date="November 4, 2021"
              />
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
        </div>
      </Page>
    </div>
  );
};

export default Home;
