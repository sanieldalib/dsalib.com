import Script from "next/script";

const SharedScripts = () => {
  return (
    <div>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XW28KWKXVH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XW28KWKXVH');
        `}
      </Script>
    </div>
  );
};

export default SharedScripts;
