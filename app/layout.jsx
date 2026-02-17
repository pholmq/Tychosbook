import { Layout, Navbar } from 'nextra-theme-docs'
import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import ForumIcon from '@mui/icons-material/Forum'
import { Footer } from '../components/Footer'
import 'nextra-theme-docs/style.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#ffffff',
}

export const metadata = {
  metadataBase: new URL('https://book.tychos.space'),
  applicationName: 'Nextra',
  title: {
    template: '%s - The TYCHOS',
    default: 'The TYCHOS Our Geoaxial Binary Solar System'
  },
  description: 'He who goes slowly goes well — and goes far (old Italian adage)',
  openGraph: {
    type: 'website',
    siteName: 'book.tychos.space',
    url: 'https://book.tychos.space',
    title: 'The TYCHOS Our Geoaxial Binary Solar System',
    description: 'He who goes slowly goes well — and goes far (old Italian adage)',
    images: [
      {
        url: 'http://septclues.com/TYCHOS/TYCHOS_BOOK_COVER_2nd_EDITION_small.jpg',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: 'book.tychos.space',
    images: ['http://septclues.com/TYCHOS/TYCHOS_BOOK_COVER_2nd_EDITION_small.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-180x180.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'msapplication-TileImage',
        url: '/ms-icon-144x144.png',
      },
    ],
  },
  other: {
    'msapplication-TileColor': '#ffffff',
  }
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()

  const navbar = (
    <Navbar
      logo={
        <>
          <span style={{ marginRight: "0.5rem", fontWeight: "800" }}>The TYCHOS</span>
          <span style={{ fontWeight: "400", color: "#4B5563" }}>
            Our Geoaxial Binary Solar System
          </span>
        </>
      }
      project={{
        link: "https://github.com/pholmq/Tychosbook"
      }}
      chat={{
        link: "https://forum.tychos.space/t/welcome-to-the-tychos-forum/7",
        icon: <ForumIcon />
      }}
      search={<Search placeholder="Search..." />}
    />
  )

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout
          docsRepositoryBase="https://github.com/pholmq/Tychosbook/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          navbar={navbar}
          footer={<Footer />}
          nextThemes={{
            defaultTheme: 'dark'
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}