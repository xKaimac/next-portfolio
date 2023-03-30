import React from 'react';

import { PortfolioGameBody } from '@/components/portfolioGame/portfolioGameBody.js';
import { PortfolioGameHead } from '@/components/portfolioGame/portfolioGameHead.js';
import { PortfolioGameCode } from '@/components/portfolioGame/portfolioGameCode.js';
import { PortfolioGameIframe } from '@/components/portfolioGame/portfolioGameIframe';
import { PortfolioGameTitle } from '@/components/portfolioGame/portfolioGametitle';

import { motion } from "framer-motion";

import styles from "@/styles/portfoliogame.module.css";



export default function PortFoliogame() {
  const page = {visible: { opacity: 1, y:0}, 
                hidden: { opacity: 0, y:100}, 
                exit: { opacity:0, scale: [null, .1, .1], 
                transition:{ duration:0.5 } }};
  return (
    <>
      <motion.div initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={page}
                  className={styles.container}>
        <div className={styles.article}>
        <PortfolioGameHead />
        <PortfolioGameTitle />
        <PortfolioGameIframe />
        <PortfolioGameBody />
        <PortfolioGameCode />
        </div>
      </motion.div>
    </>
  )
}
