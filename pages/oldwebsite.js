import React from 'react';


import { OldWebsiteBody } from '@/components/oldWebsite/oldWebsiteBody';
import { OldWebsiteCode } from '@/components/oldWebsite/oldWebsiteCode';
import { OldWebsiteHead } from '@/components/oldWebsite/oldWebsiteHead';
import { OldWebsiteIframe } from '@/components/oldWebsite/oldWebsiteIframe';

import { motion } from "framer-motion";

import styles from "@/styles/oldwebsite.module.css";


export default function oldwebsite() {
  const page = {visible: { opacity: 1, y:0}, 
  hidden: { opacity: 0, y:100}, 
  exit: { opacity:0, scale: [null, .1, .1], 
  transition:{ duration:0.5 } }};
  return (
    <>
    <OldWebsiteHead />
    <motion.div initial="hidden"
                animate="visible"
                exit="exit"
                variants={page}
                className={styles.container}>
      <div className={styles.article}>
        <h1 className={styles.title}>Click around to see the ghost of HTML past!</h1>
        <OldWebsiteIframe />
        <OldWebsiteBody /> 
        <OldWebsiteCode />
      </div>
    </motion.div>
    </>
  )
}