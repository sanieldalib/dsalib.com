import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Page from "../components/Page";
import { Socials } from "../components/Socials";
import DSLink from "../components/DSLink";
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
        <div className="w-full bg-gray-800">
          <div className="rounded-lg flex flex-col lg:flex-row lg:w-4/5 xl:w-4/6 items-center lg:space-x-10 mx-auto py-4 lg:py-16">
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
            <div className="px-4">
              <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold text-green-400">
                Hey there, I'm Daniel!
              </h1>
              {/* <h1 className="text-5xl font-light text-center logo-font lg:text-left text-green-400">
                👋 Hey there, I'm Daniel!
              </h1> */}
              <p className="text-xl pt-2 text-center lg:text-left text-gray-400">
                Welcome! I am currently a Software Engineer at{" "}
                <DSLink href="https://www.atlassian.com">Atlassian</DSLink>{" "}
                working on CI/CD for mobile teams. I studied statistics, data
                science, and computer science at{" "}
                <DSLink href="https://upenn.edu">UPenn</DSLink>. In my free
                time, I enjoy <DSLink href="/freelance">freelancing</DSLink>,{" "}
                cycling, snowboarding, learning new things, and visiting new
                places.
              </p>
              <div className="mt-4 mx-auto flex flex-col md:flex-row justify-center lg:justify-start text-xl">
                <div
                  onClick={scrollToWork}
                  className="font-bold hover:bg-green-300 bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-2 py-2 text-center cursor-pointer shadow-md mb-2"
                >
                  Experience →
                </div>
                <Link href="/projects">
                  <div className="md:ml-2 font-bold hover:bg-green-300  bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-2 py-2 text-center cursor-pointer shadow-md mb-2">
                    Projects →
                  </div>
                </Link>

                <a href="mailto:danielsalib98@gmail.com?subject=Freelance Inquiry">
                  <div className="md:ml-2 font-bold  hover:bg-green-300  bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-2 py-2 text-center cursor-pointer shadow-md">
                    Contact me →
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="#experience" className="w-full p-4 mt-2">
          <div className="flex justify-center">
            <div className="lg:w-4/5 xl:w-3/5 mx-autor">
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
