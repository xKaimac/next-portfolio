import React from 'react';

import { CustomBody } from '@/components/pages/body.js';
import { CustomHead } from '@/components/pages/head.js';
import { CodeLinks } from '@/components/pages/codeLinks.js';
import { CustomIframe } from '@/components/pages/iFrame';
import { Title } from "@/components/pages/title";
import { Article, Container } from '@/styles/globals.styled';

const body = (
  <React.Fragment>
    I created a portfolio game using Python that I&apos;m really proud of. The game is simple and consists of three unique rooms that showcase parts of my life experiences. It serves as an interactive resume.
    <br /><br />
    While working on this project, I gained a lot of experience in Python programming, including data structures, functions, and game design.
    <br /><br />
    I also learned about game development concepts such as collision detection, game logic, and game state management.
    <br /><br />
    The game has been a valuable addition to my portfolio, highlighting my programming skills and creativity. I wrote an article about the development process, which explains the technical details and design choices I made. If you&apos;re interested in game development or Python programming, feel free to check it out{" "}
  </React.Fragment>
)

const title = (
  <React.Fragment>
    Use the arrow keys, or WASD, to move.
    Press the spacebar to interact with objects when prompted.
    Each building has an object that can be interacted with.
    This is shown with a glowing outline of the object.
  </React.Fragment>
)

const text = "To see the source code, check it out on my GitHub!"

const src = "https://portfolio-site-gamma-snowy.vercel.app/pyGame.html"

const github = "https://res.cloudinary.com/dhfmjugt0/image/upload/v1679919741/github_sign_d6629583be.png?updated_at=2023-03-27T12:22:22.545Z"

const href = "https://github.com/xKaimac/Resume-Game"

export default function PortfolioGame() {
  return (
    <Container>
      <Article>
        <CustomHead text="//Portfolio Game" />
        <Title text={title} />
        <CustomIframe src={src} />
        <CustomBody
          text={body}
          linkHref="/python-resume-game"
          linkText="here!"
        />
        <CodeLinks text={text}
          link1href={href}
          link1src={github}
        />
      </Article>
    </Container>
  )
}
