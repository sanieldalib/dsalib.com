import type { NextPage } from "next";
import Page from "../components/Page";
import DSLink from "../components/DSLink";
import LineBreak from "../components/LineBreak";
import ProjectItem from "../components/ProjectItem";

const Projects: NextPage = () => {
  return (
    <div>
      <Page title={"Projects | Daniel Salib"}>
        <div className="flex justify-center">
          <div className="flex flex-col px-4 py-4 lg:w-4/5 xl:w-3/5">
            <h1 className="text-4xl font-semibold handwriting text-green-600 mb-1">
              Projects
            </h1>
            <LineBreak />
            <div className="">
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
                blurb="Reservations for skiing and parking were required at many resorts during the 2020-2021 season due to COVID. This bot periodically checks for reservations, automatically makes the bookings, and texts users when a booking has been made. "
                tech={["Python, Selenium, Twilio"]}
                linkText="github.com"
                href="https://github.com/sanieldalib/ikon-pass-reservations-bot"
              />
              <ProjectItem
                name="New Concept Cabinets"
                img="ncc.jpg"
                date="November 2020 - January 2021"
                blurb={[
                  "Designed and built a website for New Concept Cabinets, a local cabinetry business.",
                  " Emphasis was placed on mobile performance and SEO.",
                ]}
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
