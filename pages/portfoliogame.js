import React from 'react';
import Head from 'next/head';

import styles from "@/styles/portfoliogame.module.css";

export default function PortFoliogame() {
  return (
    <>
    <Head>
      <title key="title">AM || Portfolio Game</title>
    </Head>
    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>
                Use the arrow keys, or WASD, to move. Press the spacebar to interact with objects when prompted. Each building has an object that can be interacted with. This is shown with a glowing outline of the object.
            </h1>
        </div>
        <iframe className={styles.game} src="https://portfolio-site-gamma-snowy.vercel.app/pyGame.html" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" allowfullscreen></iframe>
        <br/>
        <p>
        I created a portfolio game using Python that I&apos;m really proud of. The game is simple and consists of three unique rooms that showcase parts of my life experiences. It serves as an interactive resume.
        <br/><br/>
While working on this project, I gained a lot of experience in Python programming, including data structures, functions, and game design. I also learned about game development concepts such as collision detection, game logic, and game state management.
        <br/><br/>
The game has been a valuable addition to my portfolio, highlighting my programming skills and creativity. I wrote an article about the development process, which explains the technical details and design choices I made. If you&apos;re interested in game development or Python programming, feel free to check it out!
        </p>
    </div>
    </>
  )
}
