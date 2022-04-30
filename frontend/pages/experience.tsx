import type { NextPage } from "next";
import { Education, WorkExperience } from "../components/Experiences";
import Page from "../components/Page";

const Experience: NextPage = () => {
  return (
    <div>
      <Page title={"Experience | Daniel Salib"}>
        <div className="w-full">
          <div className="flex justify-center">
            <div className="flex flex-col px-4 py-4 lg:w-4/5 xl:w-3/5">
              <WorkExperience />
              <Education />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Experience;
