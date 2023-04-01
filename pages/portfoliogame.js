import React from 'react';

import { PortfolioGameBody } from '@/components/portfolioGame/portfolioGameBody.js';
import { PortfolioGameHead } from '@/components/portfolioGame/portfolioGameHead.js';
import { PortfolioGameCode } from '@/components/portfolioGame/portfolioGameCode.js';
import { PortfolioGameIframe } from '@/components/portfolioGame/portfolioGameIframe';
import { PortfolioGameTitle } from '@/components/portfolioGame/portfolioGametitle';

import Layout from '@/components/animations/layout';

import styled from 'styled-components';

const Container = styled.div`
max-width: 50vw;
padding-top: 5rem;
padding-bottom: 5rem;
padding-left: 5rem;
padding-right: 5rem;
margin: 0 auto;
justify-content: center;

@media screen and (max-width: 768px) {
max-width: 100%;
margin: 0 auto;
padding: 1rem;
border-radius: 0;
}
`

const Article = styled.div`
border-radius: 1rem;
background-color: #fff;
border: 1px solid #ddd;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease;
`

export default function PortFoliogame() {
  return (
    <Layout>
      <Container>
        <Article>
        <PortfolioGameHead />
        <PortfolioGameTitle />
        <PortfolioGameIframe />
        <PortfolioGameBody />
        <PortfolioGameCode />
        </Article>
      </Container>
    </Layout>
  )
}
