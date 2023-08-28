import ForumIcon from '@mui/icons-material/Forum';

export default {
  github: "https://github.com/pholmq/Tychosbook/tree/main/pages",
  docsRepositoryBase: "https://github.com/pholmq/Tychosbook/tree/main/pages",
  titleSuffix: "",
  logo: (
    <>
      <span style={{ marginRight: "0.5rem", fontWeight: "800" }}>The TYCHOS</span>
      <span style={{ fontWeight: "400", color: "#4B5563" }}>
        Our Geoaxial Binary Solar System
      </span>
    </>
  ),
  project: {
    link: "https://github.com/pholmq/Tychosbook"
  },
  chat: {
    link: "https://forum.tychos.space/t/welcome-to-the-tychos-forum/7",
    icon: <ForumIcon />
  },
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="He who goes slowly goes well — and goes far (old Italian adage)"
      />
      <meta
        name="og:description"
        content="He who goes slowly goes well — and goes far (old Italian adage)"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="http://septclues.com/TYCHOS/TYCHOS_BOOK_COVER_2nd_EDITION_small.jpg"
      />
      <meta name="twitter:site:domain" content="book.tychos.space" />
      <meta name="twitter:url" content="https://book.tychos.space" />
      <meta
        name="og:title"
        content="The TYCHOS Our Geoaxial Binary Solar System"
      />
      <meta
        name="og:image"
        content="http://septclues.com/TYCHOS/TYCHOS_BOOK_COVER_2nd_EDITION_small.jpg"
      />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
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
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: "Edit this page on GitHub",
  footerText: (
    <>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="QM24P8BHT4HJE" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/IT/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_IT/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>{" "}
      Built with Nextra and Next.js
    </>
  ),
  unstable_faviconGlyph: "🐌"
};
