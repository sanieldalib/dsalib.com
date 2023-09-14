import DSLink from "./DSLink";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <>
      <ProjectItem
        key={"Spirit and Truth"}
        name="Spirit and Truth"
        img="snt.png"
        date="March 2022 - Present"
        blurb={[
          "Flutter app available on iOS and Android with over ",
          <span className="font-bold">14,000 users</span>,
          " serving as a vital education and reference tool for Coptic Orthodox services.",
          <p className="mt-2">
            Built a Git-backed, collaborative, multi-language editor for app
            content using Svelte, FastAPI, and Kubernetes.
          </p>,
          <p className="mt-2">
            Crafted an over-the-air content delivery system, enabling apps to
            seamlessly receive and integrate the latest content updates without
            updates or user intervention.
          </p>,
        ]}
        tech={[
          "Flutter, FastAPI, Svelte, Kubernetes, Docker, Azure, TypeScript, Python, Dart",
        ]}
        linkText="App Store"
        href="https://apps.apple.com/us/app/in-spirit-and-truth/id1498587179"
        linkText2="Google Play"
        href2="https://play.google.com/store/apps/details?gl=US&hl=en_US&id=org.lacopts.spiritAndTruth"
      />
      <ProjectItem
        key={"RandomRadials NFT Minter"}
        name="RandomRadials NFT Minter"
        img="nft.png"
        date="November 2021"
        blurb="Generate radial art from any piece of text and mint your favorites into NFTs. My first experience with web3. Deployed to the Ethereum Ropsten testnet."
        tech={["Next.js, Ethereum, Solidity, Hardhat, TypeScript, web3-react"]}
        linkText="dsalib.com"
        href="/crypto/randomradials"
      />
      <ProjectItem
        key="Ikon Pass Reservations Bot"
        name="Ikon Pass Reservations Bot"
        img="ikon.jpg"
        date="February 2021"
        blurb="Reservations for skiing and parking were required at many resorts during the 2020-2021 season due to COVID. This bot periodically checks for reservations, automatically makes the bookings, and texts users when a booking has been made. "
        tech={["Python, Selenium, Twilio"]}
        linkText="github.com"
        href="https://github.com/sanieldalib/ikon-pass-reservations-bot"
      />
      <ProjectItem
        key="New Concept Cabinets"
        name="New Concept Cabinets"
        img="ncc.png"
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
        key="TastyCarte"
        name="TastyCarte"
        img="tc.png"
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
      <ProjectItem
        key="Penn Mobile"
        name="Penn Mobile iOS"
        img="pennmobile.png"
        date="August 2018 - May 2020"
        blurb={[
          "Penn Mobile is Penn's official student app. It provides campus essentials to the fingertips of ",
          <span className="font-bold">over 4000 monthly users</span>,
          ". Features include study room booking, dining hall hours and menus, course schedule, laundry machine availability, fitness facility hours, and quick access to emergency services.",
        ]}
        tech="Swift, Flask"
        linkText="App Store"
        href="https://apps.apple.com/us/app/penn-mobile/id944829399?platform=iphone"
        linkText2="github.com"
        href2="https://github.com/pennlabs/penn-mobile-ios"
      />
    </>
  );
};

export default Projects;
