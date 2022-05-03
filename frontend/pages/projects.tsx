import type { NextPage } from "next";
import Page from "../components/Page";
import DSLink from "../components/DSLink";
import LineBreak from "../components/LineBreak";
import ProjectItem from "../components/ProjectItem";
import Projects from "../components/Projects";

const ProjectPage: NextPage = () => {
  return (
    <div>
      <Page title={"Projects | Daniel Salib"}>
        <div className="flex justify-center">
          <div className="flex flex-col px-4 py-4 lg:w-4/5 xl:w-3/5">
            <h1 className="text-4xl font-semibold handwriting text-green-600 mb-1">
              Projects
            </h1>
            <LineBreak />
            <Projects />
          </div>
        </div>
      </Page>
    </div>
  );
};

export default ProjectPage;
