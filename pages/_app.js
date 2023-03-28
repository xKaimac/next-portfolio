import '@/styles/globals.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/footer';

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <NavBar />
      <Component className="main-content" {...pageProps} />
      <Footer />
    </>
  )
}
