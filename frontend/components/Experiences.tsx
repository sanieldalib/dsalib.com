import DSLink from "../components/DSLink";
import {
  ExperienceItem,
  ExperienceSection,
} from "../components/ExperienceSection";
import AtlassianImage from "../public/atlassian.png";
import AWSImage from "../public/aws.png";
import CBSImage from "../public/cbsi.png";
import PennImage from "../public/penn.png";
import SiroImage from "../public/siro.png";

export const WorkExperience = () => {
  return (
    <>
      <ExperienceSection title="Work">
        <ExperienceItem
          key={"Siro"}
          title={[
            <DSLink href="https://siro.ai">Siro.ai</DSLink>,
            ", Software Engineer",
          ]}
          image={SiroImage}
          date="June 2022 - Present"
          location="New York City, NY (Remote)"
          items={[
            [
              "Architected and engineered a search engine for transcripts using GCP and ",
              <DSLink href="https://www.meilisearch.com/">Meilisearch</DSLink>,
              " scaling to handle over 2.5 million recordings and powering search for 20,000 users",
            ],
            "Created an iOS SDK to seamlessly integrate core Siro features into partner apps - released for both iOS and React Native",
            "Spearheaded the adoption of testing and CI/CD practices across all repositories, resulting in a significant reduction in errors and deployment times",
            "Conceptualized and launched a management web client using TypeScript and Svelte, which has become a critical offering for customers",
            [
              <span className="font-bold">Tech: </span>,
              "Typescript, Svelte, Swift, ",
              <DSLink href="https://www.meilisearch.com/">Meilisearch</DSLink>,
              ", GCP, Firebase",
            ],
          ]}
        />
        <ExperienceItem
          key={"Atlassian"}
          title={[
            <DSLink href="https://atlassian.com">Atlassian</DSLink>,
            ", Software Engineer II — Developer Tooling - Mobile CI",
          ]}
          image={AtlassianImage}
          date="July 2020 - Present"
          location="Mountain View, CA (Remote)"
          items={[
            "Maintain build infrastructure supporting nearly 20,000 mobile builds weekly and >100 mobile engineers",
            [
              "Designed and implemented per-build macOS runners for Bitbucket Pipelines, utilizing ",
              <DSLink href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html">
                macOS EC2s
              </DSLink>,
              " with ",
              <DSLink href="https://tart.run/">Tart</DSLink>,
              ", and developed a monitoring solution using Go ",
            ],
            "Championed the migration from Intel to Apple Silicon, resulting in a 51% boost in build speeds, annual cost savings of approximately $90,000, and a monthly reduction of nearly 900 hours in developer time",
            "Develop internal tools for signing management, dependency caching, code quality, building, testing, distribution, and other common mobile CI items",
            [
              <span className="font-bold">Tech: </span>,
              "AWS, ",
              <DSLink href="https://tart.run/">Tart</DSLink>,
              ", ",
              "Docker, Python, Go, Ruby, Bash, Terraform, Packer, Ansible, Splunk, SignalFx",
            ],
          ]}
        />
        <ExperienceItem
          key={"AWS"}
          title={[
            <DSLink href="https://aws.amazon.com">Amazon Web Services</DSLink>,
            ", Software Engineer Intern",
          ]}
          image={AWSImage}
          date="June 2019 - August 2019"
          location="San Francisco, CA"
          items={[
            "Leveraged AWS microservices to develop applications for both client and internal use",
            "Developed a networking solution for Fortune 200 company which reduced the configuration time of resources by 50%",
            "Improved the onboarding experience of AWS new hires by developing many microservices used for training purposes",
            [
              <span className="font-bold">Tech: </span>,
              "React, TypeScript, Python, AWS (Lambda, DynamoDB, EC2, S3, VPC)",
            ],
          ]}
        />
        <ExperienceItem
          key={"CBS"}
          title={[
            <DSLink href="https://cbsinteractive.com">CBS Interactive</DSLink>,
            ,
            ", Product Management Intern, CBS All Access",
          ]}
          image={CBSImage}
          date="June 2019 - August 2019"
          location="San Francisco, CA"
          items={[
            "Designed and developed a new page support portal and presented to stakeholders",
            "Analyzed features of various competitors, synthesized my findings and presented to executives",
            "Worked with third party vendors to understand their products and integrate them into existing tech stack",
          ]}
        />
        <ExperienceItem
          key={"cis195ta"}
          title={[
            "Teaching Assistant, ",
            <DSLink href="https://www.seas.upenn.edu/~cis195/">CIS 195</DSLink>,
            " - iOS Development, ",
            <DSLink href="https://upenn.edu">UPenn</DSLink>,
          ]}
          image={PennImage}
          date="August 2018 - January 2020"
          location="Philadelphia, PA"
          items={[
            "Assisted students both during lecture and personal office hours",
            "Developed curriculum with instructors around UIKit, Firebase, MVC, CocoaPods, and MapKit",
            "Prepared and delivered lectures on topics including Core Animation",
          ]}
        />
      </ExperienceSection>
    </>
  );
};

export const Education = () => {
  return (
    <>
      <ExperienceSection title="Education">
        <ExperienceItem
          key={"upennseas"}
          title={[
            "University of Pennsylvania, ",
            <DSLink href="https://www.seas.upenn.edu/">
              School of Engineering and Applied Sciences
            </DSLink>,
          ]}
          image={PennImage}
          date="August 2019 - May 2020"
          location="Philadelphia, PA"
          items={[
            "Master of Science in Engineering in Data Science",
            "Relevant Coursework: Deep Learning, Databases, Computer Vision, Machine Perception, Internet and Web Systems, Computational Linguistics",
          ]}
        />
        <ExperienceItem
          key={"upennwharton"}
          title={[
            "University of Pennsylvania, ",
            <DSLink href="https://wharton.upenn.edu">
              Wharton School of Business
            </DSLink>,
          ]}
          image={PennImage}
          date="August 2016 - May 2020"
          location="Philadelphia, PA"
          items={[
            "Bachelors of Science in Economics + Minor in Computer Science; Concentration in Statistics ",
            "Relevant Coursework: Big Data Analytics, Modern Data Mining, Applied Probability Models, Probability",
          ]}
        />
      </ExperienceSection>
    </>
  );
};
