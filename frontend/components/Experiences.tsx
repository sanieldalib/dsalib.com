import DSLink from "../components/DSLink";
import {
  ExperienceItem,
  ExperienceSection,
} from "../components/ExperienceSection";
import AtlassianImage from "../public/atlassian.png";
import AWSImage from "../public/aws.png";
import CBSImage from "../public/cbsi.png";
import PennImage from "../public/penn.png";

export const WorkExperience = () => {
  return (
    <ExperienceSection title="Work">
      <ExperienceItem
        key={"Atlassian"}
        title={[
          <DSLink href="https://atlassian.com">Atlassian</DSLink>,
          ", Software Engineer II",
        ]}
        image={AtlassianImage}
        date="July 2020 - Present"
        location="Mountain View, CA (Remote)"
        items={[
          "Software Engineer II on the Developer Productivity Services Team",
          [
            "Developing Ephemeral macOS CI builders with ",
            <DSLink href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html">
              macOS EC2s
            </DSLink>,
            " + ",
            <DSLink href="https://veertu.com">Veertu Anka</DSLink>,
          ],
          "Tooling for building, testing, signing, and distributing Mobile Apps",
          "Maintain Android, iOS, and macOS CI/CD infrastructure for Atlassian SWEs",
          "Promoted to Software Engineer II during March 2022",
          [
            <span className="font-bold">Tech: </span>,
            <DSLink href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html">
              macOS EC2s
            </DSLink>,
            ", ",
            <DSLink href="https://veertu.com/">Veertu Anka</DSLink>,
            ", ",
            <DSLink href="https://www.terraform.io/">Terraform</DSLink>,
            ", ",
            <DSLink href="https://www.packer.io/">Packer</DSLink>,
            ", ",
            <DSLink href="https://www.ansible.com/">Ansible</DSLink>,
            ", Docker, Python",
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
  );
};

export const Education = () => {
  return (
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
  );
};
