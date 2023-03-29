import React from 'react';

import { PortfolioGameBody } from '@/components/portfolioGame/portfolioGameBody.js';
import { PortfolioGameHead } from '@/components/portfolioGame/portfolioGameHead.js';
import { PortfolioGameCode } from '@/components/portfolioGame/portfolioGameCode.js';
import { PortfolioGameIframe } from '@/components/portfolioGame/portfolioGameIframe';
import { PortfolioGameTitle } from '@/components/portfolioGame/portfolioGametitle';

import styles from "@/styles/portfoliogame.module.css";



export default function PortFoliogame() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.article}>
        <PortfolioGameHead />
        <PortfolioGameTitle />
        <PortfolioGameIframe />
        <PortfolioGameBody />
        <PortfolioGameCode />
        </div>
      </div>
    </>
  )
}
