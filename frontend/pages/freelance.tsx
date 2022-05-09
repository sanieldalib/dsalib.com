import { NextPage } from "next";
import Link from "next/link";
import Page from "../components/Page";

const FreelancePage: NextPage = () => {
  return (
    <div>
      <Page
        title="Freelance | Daniel Salib"
        endpoint="freelance"
        description="Let's build something together. Whatever
        you have in mind, I will help refine your ideas and turn them into
        beautiful apps. Contact me at dsalib.com/freelance"
      >
        <div className="topo-pattern bg-gray-800 flex flex-col text-gray-300 py-8 lg:w-4/5 xl:w-4/6 mx-auto px-6 lg:rounded-md lg:mt-2">
          {/* <div className="lg:w-4/5 xl:w-4/6 mx-auto"> */}
          <h1 className="text-5xl font-bold text-green-400">
            Let's build something together.
          </h1>
          <p className="mt-6 text-xl">
            I'm Daniel, a developer with a passion for enabling businesses and
            people to reach their full potential with{" "}
            <span className="font-semibold">quality software</span>. Whatever
            you have in mind, I will help refine your ideas and turn them into
            beautiful apps. I'm experienced in building{" "}
            <span className="font-semibold">websites</span>,{" "}
            <span className="font-semibold">full-stack web apps</span>, and{" "}
            <span className="font-semibold">mobile apps</span>. Check out my
            previous work and don't hesitate to reach out!
            <span className="font-semibold"> You won't regret it.</span>
          </p>
          <div className="mt-4 md:w-1/2 lg:mx-0 text-xl">
            <Link href="/projects" passHref>
              <a>
                <div className="inline-block font-bold hover:bg-green-300  bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-2 py-2 flex-grow text-center cursor-pointer shadow-md">
                  View my work →
                </div>
              </a>
            </Link>

            <a href="mailto:danielsalib98@gmail.com?subject=Freelance Inquiry">
              <div className="inline-block ml-2 font-bold  hover:bg-green-300  bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-2 py-2 flex-grow text-center cursor-pointer shadow-md">
                Contact me →
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-6 lg:w-4/5 xl:w-4/6 mx-auto px-6 text-gray-300">
          <h1 className="text-3xl font-bold text-green-400 pr-6">
            Why build with me?
          </h1>
          <div className="mt-6 text-xl border-4 border-green-500 rounded-md p-4 mb-10">
            <h1 className="text-2xl font-bold mb-2 text-green-400">
              Quality Work, No Compromises
            </h1>
            <p className="font-light mb-6">
              My breadth of experience with building various kinds of projects
              has taught me the{" "}
              <span className="font-bold">best practices of the industry</span>.
              These best practices are applied to your projects &mdash;{" "}
              <span className="font-bold">no corners are cut.</span>
            </p>
            <h1 className="text-2xl font-bold mb-2 text-green-400">
              Your Timeline, Your Expectations
            </h1>
            <p className="font-light mb-6">
              Each project I take on is{" "}
              <span className="font-bold">fully customized</span> to meet your
              requirements, timeline, and budget. Whatever your constraints are,{" "}
              <span className="font-bold">I can work with them</span>.
            </p>
            <h1 className="text-2xl font-bold mb-2 text-green-400">
              Modern Tech, Any Scale
            </h1>
            <p className="font-light mb-6 ">
              Everything I build uses the{" "}
              <span className="font-bold ">latest tech</span> for the job, is{" "}
              <span className="font-bold">cloud-native</span>, and is{" "}
              <span className="font-bold">built to scale</span> with you.
            </p>
            <h1 className="text-2xl font-bold mb-2 text-green-400">
              Support and Communication
            </h1>
            <p className="font-light">
              I keep <span className="font-bold">consistent communication</span>{" "}
              with clients before, during, and after a project. I'm always
              available for support or questions.
            </p>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-bold text-green-400 pr-6">
              My Process
            </h1>
            <div className="text-xl font-light mt-6">
              <p className="mb-4">
                I begin with a <span className="font-bold">no-commitment</span>{" "}
                call to better understand what you are hoping to build and
                accomplish.
              </p>
              <p className="mb-4">
                Next, I provide you with an{" "}
                <span className="font-bold">
                  estimated timeline, budget, project definition, and scope
                </span>
                . After the discussion of these items, work begins.
              </p>
              <p className="mb-4">
                As work is ongoing, I will meet with you{" "}
                <span className="font-bold">every week</span> to share updates
                and maintain a regular feedback loop. I will also provide you
                with asynchronous updates regularly.
              </p>
              <p className="mb-4">
                After work is completed,{" "}
                <span className="font-bold">
                  I will continue to check in to ensure that you are satisfied
                  with the finished product.
                </span>{" "}
                If any issues arise, I will address them{" "}
                <span className="font-bold">promptly</span>.
              </p>
              <a href="mailto:danielsalib98@gmail.com?subject=Freelance Inquiry">
                <div className="inline-block font-bold  hover:bg-green-300  bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-2 py-2 flex-grow text-center cursor-pointer shadow-md">
                  Schedule a no-commitment call →
                </div>
              </a>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-green-400 pr-6">
              Payment &amp; Compensation
            </h1>
            <div className="text-xl font-light mt-6">
              <p className="mb-4">
                Well-defined projects, will be broken up into milestones and
                paid upon completion of each milestone.
              </p>
              <p className="mb-4">
                Fluid and less-defined projects will be billed on an hourly
                basis to provide you flexibility with what we build.{" "}
                <span className="font-bold">
                  I only bill for hours spent directly working on your project,
                  not time spent on research or learning.
                </span>
              </p>
              <p className="mb-4">
                Compensation is determined from the project scope, timeline, and
                platforms.
              </p>
              <a href="mailto:danielsalib98@gmail.com?subject=Freelance Inquiry">
                <div className="inline-block font-bold  hover:bg-green-300  bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-2 py-2 flex-grow text-center cursor-pointer shadow-md">
                  Get an estimate →
                </div>
              </a>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default FreelancePage;
