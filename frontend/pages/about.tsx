import type { NextPage } from "next";
import Page from "../components/Page";

const About: NextPage = () => {
  return (
    <div>
      <Page title={"About | Daniel Salib"}>
        <div className="flex">
          <div className="w-full p-4 py-36 bg-gray-200 dark:bg-gray-800">
            <h1 className="text-5xl font-semibold text-center handwriting text-green-800 dark:text-green-500">
              This page is coming soon.
            </h1>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default About;
