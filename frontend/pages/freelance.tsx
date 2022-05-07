import { NextPage } from "next";
import Link from "next/link";
import Page from "../components/Page";

const FreelancePage: NextPage = () => {
  return (
    <div>
      <Page title="Freelance | Daniel Salib">
        <div className="topo-pattern bg-gray-800 flex flex-col text-white py-12 lg:w-4/5 xl:w-3/5 mx-auto px-6 rounded-md">
          {/* <div className="lg:w-4/5 xl:w-3/5 mx-auto"> */}
          <h1 className="text-5xl font-bold">Lets build something together.</h1>
          <p className="mt-6 text-xl">
            👋 I'm Daniel, a developer with a passion for enabling businesses
            and people to reach their full potential with{" "}
            <span className="font-semibold">quality software</span>. Whatever
            you have in mind, I will help refine your ideas and turn them into
            beautiful apps. I'm experienced building{" "}
            <span className="font-semibold">websites</span>,{" "}
            <span className="font-semibold">full stack web apps</span>, and{" "}
            <span className="font-semibold">mobile apps</span>. Check out my
            previous work and don't hesitate to reach out!
            <span className="font-semibold"> You won't regret it.</span>
          </p>
          <div className="mt-4 md:w-1/2 lg:mx-0">
            <Link href="/projects">
              <div className="inline-block font-bold hover:bg-green-300  bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-2 py-2 flex-grow text-center cursor-pointer shadow-md">
                View my work →
              </div>
            </Link>

            <a href="mailto:danielsalib98@gmail.com?subject=Freelance Inquiry">
              <div className="inline-block ml-2 font-bold  hover:bg-green-300  bg-gray-700 text-green-500 hover:text-green-800 rounded-md px-2 py-2 flex-grow text-center cursor-pointer shadow-md">
                Contact me →
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col text-white py-12 lg:w-4/5 xl:w-3/5 mx-auto px-6 rounded-md">
          <h1 className="text-3xl font-semibold text-green-600">
            Compensation
          </h1>
          {/* <Projects /> */}
        </div>
        {/* </div> */}
      </Page>
    </div>
  );
};

export default FreelancePage;
