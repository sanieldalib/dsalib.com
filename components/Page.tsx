import Head from "next/head";
import Navbar from "./Navbar";

type PageProps = {
  title?: string;
  description?: string;
};

const Page: React.FC<PageProps> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title || "dsalib.com"}</title>
        <meta
          name="description"
          content={props.description || "Checkout Daniel Salib on dsalib.com"}
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Page;
