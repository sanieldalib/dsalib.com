import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

type PageProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

const Page: React.FC<PageProps> = (props) => {
  const defaultTitle = "Daniel Salib - dsalib.com";
  const defaultDescription = "Checkout Daniel Salib on dsalib.com";
  return (
    <div className="bg-white dark:bg-shadow-black">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#121212"></meta>
        <title>{props.title || defaultTitle}</title>
        <meta name="title" content={props.title || defaultTitle} />
        <meta
          name="description"
          content={props.description || defaultDescription}
        ></meta>

        <meta
          name="description"
          content={props.description || defaultDescription}
        />
        {/* Facebook Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dsalib.com/" />
        <meta property="og:title" content={props.title || defaultTitle} />
        <meta
          property="og:description"
          content={props.description || defaultDescription}
        />
        <meta property="og:image" content={props.image} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dsalib.com/" />
        <meta property="twitter:title" content={props.title || defaultTitle} />
        <meta
          property="twitter:description"
          content="Checkout Daniel Salib on dsalib.com"
        />
        <meta property="twitter:image" content={props.image} />
      </Head>
      <Navbar />
      <div className="min-h-screen">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Page;
