import type { NextPage } from "next";
import Link from "next/link";
import Page from "../components/Page";
import { Socials } from "../components/Socials";
import NewsItem from "../components/NewsItem";
import DSLink from "../components/DSLink";
import { DefaultButton } from "../components/Buttons";

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
              <div className="lg:mt-4 hidden lg:block">
                <Socials center />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-center lg:text-left handwriting text-green-800 dark:text-green-500">
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
                This site serves both as a portfolio and a creative space. As a
                result, it is an ongoing work and will be updated frequently.
                Check back often for new things!
              </p>
              <div className="flex flex-row space-x-4 mt-4 lg:w-1/2">
                <Link href="/experience">
                  <div
                    className={`py-2 px-4 rounded-md dark:bg-green-500 dark:hover:bg-green-400 bg-green-300 hover:bg-green-200 transform duration-150 hover:shadow-md flex-grow text-center cursor-pointer`}
                  >
                    Experience
                  </div>
                </Link>
                <Link href="/projects">
                  <div
                    className={`py-2 px-4 rounded-md dark:bg-green-500 dark:hover:bg-green-400 bg-green-300 hover:bg-green-200 transform duration-150 hover:shadow-md flex-grow text-center cursor-pointer`}
                  >
                    Projects
                  </div>
                </Link>
              </div>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <NewsItem
                  title="🤓 Projects Updated"
                  href="/projects"
                  subtitle="Projects have been updated!"
                  linkText="Visit"
                  date="February 3, 2022"
                />
                <NewsItem
                  title="⚡ Mint a RandomRadial NFT"
                  href="/crypto/randomradials"
                  subtitle={`Mint your very own NFT! RandomRadials are NFTs composed of randomly generated images seeded on a provided string.`}
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
