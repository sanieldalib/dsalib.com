import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Page from "../components/Page";
import { Socials } from "../components/Socials";
import NewsItem from "../components/NewsItem";
import DSLink from "../components/DSLink";
import { DefaultButton } from "../components/Buttons";
import danielImage from "../public/dsalib.png";
import { Education, WorkExperience } from "../components/Experiences";

const scrollToWork = () => {
  const section = document.getElementById("#experience");
  const yOffset = -50;
  const y = section!.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const Home: NextPage = () => {
  return (
    <div>
      <Page title={"Home | Daniel Salib"}>
        {/* Hello - Intro Section */}
        <div className="w-full p-4 bg-gray-200 dark:bg-gray-800">
          <div className="rounded-lg flex flex-col lg:flex-row lg:w-4/5 xl:w-3/5 items-center lg:space-x-10 mx-auto py-4 lg:py-16">
            <div className="flex-shrink-0 pt-2 mb-2 overflow-hidden">
              <Image
                width={144}
                height={144}
                src={danielImage}
                className="rounded-full"
                placeholder="blur"
              />
              <div className="lg:mt-4 hidden lg:block">
                <Socials center />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-center lg:text-left handwriting text-green-600 dark:text-green-500">
                Hey there, I'm Daniel!
              </h1>
              <p className="text-lg pt-2 text-center lg:text-left dark:text-gray-400">
                Hey there! I am currently a Software Engineer at{" "}
                <DSLink href="https://www.atlassian.com">Atlassian</DSLink>{" "}
                working on CI/CD for mobile teams. I studied statistics, data
                science, and computer science at{" "}
                <DSLink href="https://upenn.edu">UPenn</DSLink>. In my free
                time, I enjoy <DSLink href="/freelance">freelancing</DSLink>,{" "}
                cycling, snowboarding, learning new things, and visiting new
                places.
              </p>
              <div className="block mt-2">
                <div
                  onClick={scrollToWork}
                  className={`inline-block py-2 px-4 mr-2 rounded-md dark:bg-green-500 dark:hover:bg-green-400 bg-green-300 hover:bg-green-200 transform duration-150 hover:shadow-md flex-grow text-center cursor-pointer`}
                >
                  Experience
                </div>
                <Link href="/projects">
                  <div
                    className={`inline-block py-2 px-4 rounded-md dark:bg-green-500 dark:hover:bg-green-400 bg-green-300 hover:bg-green-200 transform duration-150 hover:shadow-md flex-grow text-center cursor-pointer`}
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

        <div
          id="#experience"
          className="w-full p-4 mt-2 bg-white dark:bg-shadow-black"
        >
          <div className="flex justify-center">
            <div className="lg:w-4/5 xl:w-3/5 justify-center">
              <WorkExperience />
              <Education />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Home;
