import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { NavBar } from '@/components/headerFooter/NavBar';
import { Footer } from '@/components/headerFooter/footer';
import '@/styles/globals.css';
import Layout from '@/components/animations/layout';
import React from 'react';

const App = ({ Component, pageProps }) => {
  const router= useRouter()

  return (
    <React.Fragment>
      <NavBar/>
      <AnimatePresence mode="wait" >
        <Layout>
          <Component key={router.asPath}{...pageProps} />
        </Layout>
      </AnimatePresence>
      <Footer/>
    </React.Fragment>
  )
}

export default App;