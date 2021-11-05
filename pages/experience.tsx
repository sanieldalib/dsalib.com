import type { NextPage } from "next";
import {
  ExperienceItem,
  ExperienceSection,
} from "../components/ExperienceSection";
import Page from "../components/Page";

const Experience: NextPage = () => {
  return (
    <div>
      <Page title={"Experience | Daniel Salib"}>
        <div className="w-full">
          <div className="flex justify-center">
            <div className="flex flex-col px-4 py-4 lg:w-4/5">
              <ExperienceSection title="Professional Experience">
                <ExperienceItem
                  title="Software Engineer (Mobile Tools)"
                  company="Atlassian"
                  link="https://atlassian.com"
                  image="atlassian.png"
                  date="July 2020 - Present"
                  location="Mountain View, CA"
                  items={["Software Engineer on the Mobile Tools Team"]}
                  swap
                />
                <ExperienceItem
                  title="Software Engineer (Mobile Tools)"
                  company="Amazon Web Services"
                  link="https://aws.amazon.com"
                  image="aws.png"
                  date="June 2019 - August 2019"
                  location="San Francisco, CA"
                  items={["MSE in Data Science"]}
                  swap
                />
                <ExperienceItem
                  title="Product Management Intern, CBS All Access"
                  company="CBS Interactive"
                  link="https://cbsinteractive.com/"
                  image="cbsi.jpg"
                  date="June 2019 - August 2019"
                  location="San Francisco, CA"
                  items={["MSE in Data Science"]}
                  swap
                />
              </ExperienceSection>
              <ExperienceSection title="Education">
                <ExperienceItem
                  title="School of Engineering and Applied Sciences"
                  company="University of Pennsylvania"
                  link="https://upenn.edu"
                  image="penn.jpg"
                  date="August 2019 - May 2020"
                  location="Philadelphia, PA"
                  items={[
                    "Master of Science in Engineering in Data Science",
                    "Relevant Coursework: Big Data Analytics, Modern Data Mining, Applied Probability Models, Databases, Computer Vision, Internet and Web Systems"
                  ]}
                  swap
                />
                <ExperienceItem
                  title=" Wharton School of Business"
                  company="University of Pennsylvania"
                  link="https://upenn.edu"
                  image="penn.jpg"
                  date="August 2016 - May 2020"
                  location="Philadelphia, PA"
                  swap
                />
              </ExperienceSection>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Experience;
