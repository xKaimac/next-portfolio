import '@/styles/globals.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/footer';

export default function App({ Component, pageProps }) {
  return (
    <>
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
