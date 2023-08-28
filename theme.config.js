import ForumIcon from '@mui/icons-material/Forum';
import { Footer } from './components/Footer';
import { Head } from './components/Head';

export default {
  docsRepositoryBase: "https://github.com/pholmq/Tychosbook/tree/main/pages",
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
  head: <Head />,
  footer: {
    text: <Footer />
  },
  faviconGlyph: "🐌",
  nextThemes: {
    defaultTheme: 'dark'
  }
};
