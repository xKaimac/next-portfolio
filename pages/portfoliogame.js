import React from 'react';

import { CustomBody } from '@/components/pages/body.js';
import { CustomHead } from '@/components/pages/head.js';
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

const body = "I created a portfolio game using Python that I\'m really proud of. The game is simple and consists of three unique rooms that showcase parts of my life experiences. It serves as an interactive resume.\n\n While working on this project, I gained a lot of experience in Python programming, including data structures, functions, and game design.\n I also learned about game development concepts such as collision detection, game logic, and game state management.\n\n The game has been a valuable addition to my portfolio, highlighting my programming skills and creativity. I wrote an article about the development process, which explains the technical details and design choices I made. If you\'re interested in game development or Python programming, feel free to check it out"

export default function PortFoliogame() {
  return (
    <Layout>
      <Container>
        <Article>
        <CustomHead text="//Portfolio Game"/>
        <PortfolioGameTitle />
        <PortfolioGameIframe />
        <CustomBody
          text={body}
          linkHref="/python-resume-game"
          linkText="here!"
        />        

        <PortfolioGameCode />
        </Article>
      </Container>
    </Layout>
  )
}
