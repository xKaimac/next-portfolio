import '@/styles/globals.css';


import { NavBar } from '@/components/headerFooter/NavBar';
import { Footer } from '@/components/headerFooter/footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';




const App = ({ Component, pageProps }) => {
  const router= useRouter()


  return (
    <>
      <NavBar></NavBar>
      <AnimatePresence mode="wait" >
        <Component key={router.asPath}{...pageProps} />
      </AnimatePresence>
      <Footer></Footer>
    </>
  )
}

export default App
