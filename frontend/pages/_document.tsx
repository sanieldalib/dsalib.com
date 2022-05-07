import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import SharedScripts from "../components/SharedScripts";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-shadow-black">
          <SharedScripts />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
