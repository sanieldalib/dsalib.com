import Head from "next/head";

type PageProps = {
    title?: string
    description?: string
}

const Page: React.FC<PageProps> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title || 'dsalib.com'}</title>
        <meta name="description" content={props.description || 'Checkout Daniel Salib on dsalib.com'}></meta>
      </Head>
      {props.children}
    </div>
  );
};

export default Page;
