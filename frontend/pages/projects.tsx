import type { NextPage } from "next";
import Page from "../components/Page";
import LineBreak from "../components/LineBreak";
import Projects from "../components/Projects";

const ProjectPage: NextPage = () => {
  return (
    <div>
      <Page title={"Projects | Daniel Salib"}>
        <div className="flex justify-center">
          <div className="flex flex-col mt-2 lg:w-4/5 xl:w-4/6">
            <h1 className="text-4xl font-bold text-green-500 mb-2">Projects</h1>
            <LineBreak />
            <Projects />
          </div>
        </div>
      </Page>
    </div>
  );
};

export default ProjectPage;
