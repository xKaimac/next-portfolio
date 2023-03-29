import styles from '@/styles/portfoliogame.module.css'
import Link from 'next/link'

export function PortfolioGameBody() {
  return (
    <>

        
        <p className={styles.body}>
            I created a portfolio game using Python that I{"'"}m really proud of. 
            The game is simple and consists of three unique rooms that showcase parts of my life experiences. 
            It serves as an interactive resume.
            <br/><br/>
            While working on this project, I gained a lot of experience in Python programming, including data structures, functions, and game design. 
            I also learned about game development concepts such as collision detection, game logic, and game state management.
            <br/><br/>
            The game has been a valuable addition to my portfolio, highlighting my programming skills and creativity. 
            I wrote an article about the development process, which explains the technical details and design choices I made. 
            If you{"'"}re interested in game development or Python programming, feel free to check it out 
                <Link href="/python-resume-game"> here!</Link>
        </p>
    </>
  )
}
