import type { NextPage } from "next";
import Page from "../components/Page";
import DSLink from "../components/DSLink";

type ProjectItemProps = {
  name: string;
  img: string;
  date: string;
  blurb?: any[] | string;
  linkText: any[] | string;
  href: string;
  tech?: any[] | string;
};

const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div className="mb-8" key={props.name}>
      <div className="flex flex-col md:flex-row border-4 border-green-500 rounded-xl text-left py-4 px-4 hover:shadow-md dark:border-green-500 dark:bg-gray-800 bg-gray-100">
        <div className="w-full md:w-5/12">
          <img
            className="border-4 dark:border-green-500 border-green-500 rounded-md"
            src={props.img}
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 md:w-1/2">
          <h1 className="text-3xl font-semibold handwriting dark:text-green-400 text-green-700 mb-2">
            {props.name}
          </h1>
          <div className="text-lg text-gray-500 dark:text-gray-400 mb-2">
            {props.date}
          </div>
          <div className="text-xl dark:text-gray-100 text-gray-700 mb-2">
            {props.blurb}
          </div>
          {props.tech && (
            <div className="text-lg text-gray-500 dark:text-gray-400">
              Tech: {props.tech}
            </div>
          )}
          <div className="mt-4 pb-2">
            <DSLink
              href={props.href}
              className="font-bold bg-green-100 hover:bg-green-200  dark:bg-gray-700 dark:text-green-500 dark:hover:text-green-800 rounded-md px-2 py-2 flex-grow-0 cursor-pointer"
            >
              <>{props.linkText} →</>
            </DSLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: NextPage = () => {
  return (
    <div>
      <Page title={"Projects | Daniel Salib"}>
        <div className="flex justify-center">
          <div className="flex flex-col px-4 py-4 lg:w-4/5 xl:w-3/5">
            <h1 className="text-5xl font-semibold text-center handwriting text-green-800 dark:text-green-500">
              Projects
            </h1>
            <div className="mt-5">
              <ProjectItem
                name="RandomRadials NFT Minter"
                img="nft.jpg"
                date="November 2021"
                blurb="Generate radial art from any piece of text and mint your favorites into NFTs. My first experience with web3. Deployed to the Ethereum Ropsten testnet."
                tech={[
                  "Next.js, Ethereum, Solidity, Hardhat, TypeScript, web3-react",
                ]}
                linkText="dsalib.com"
                href="https://dsalib.com/crypto/randomradials"
              />
              <ProjectItem
                name="Ikon Pass Reservations Bot"
                img="ikon.jpg"
                date="February 2021"
                blurb="Reservations for skiing and parking were required at many resorts during the 2020-2021 season due to COVID. This bot periodically checks for reservations and makes the bookings."
                tech={["Python, Selenium, Twilio"]}
                linkText="github.com"
                href="https://github.com/sanieldalib/ikon-pass-reservations-bot"
              />
              <ProjectItem
                name="New Concept Cabinets"
                img="ncc.jpg"
                date="November 2020 - January 2021"
                blurb="Designed and built a website for New Concept Cabinets, a local
                cabinetry business. Emphasis was places on mobile performance and
                SEO."
                tech={["Next.js, Tailwinds, Vercel, React"]}
                linkText="newconceptcabinet.com"
                href="https://newconceptcabinet.com"
              />
              <ProjectItem
                name="TastyCarte"
                img="tc.jpg"
                date="March 2020 - May 2020"
                blurb={[
                  "TastyCarte is an online ordering platform, launched at the start of the pandemic, designed for local restaurants. Built on ",
                  <DSLink href="https://github.com/tastyigniter/TastyIgniter">
                    TastyIgniter
                  </DSLink>,
                  ", TastyCarte offered restaurants a customized and containerized solution with predicatable pricing. ",
                ]}
                tech="Docker, AWS ECS, AWS SQS, PHP, Laravel"
                linkText="tastycarte.com"
                href="https://tastycarte.com"
              />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Projects;
