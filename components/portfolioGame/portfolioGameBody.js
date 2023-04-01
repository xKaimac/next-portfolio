import styled from 'styled-components'

const Body = styled.p`
font-size: 1.25rem;
padding-top: 2rem;
padding: 2rem;
color: #292929;
line-height: 1.4;

@media screen and (max-width: 768px) {
  padding: 1rem;
}
`

const Code = styled.a`
font-size: 1.25rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 1rem;

@media screen and (max-width: 768px) {
padding: 1rem;
}
`

export function PortfolioGameBody() {
  return (
    <>        
        <Body>
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
                <Code href="/python-resume-game"> here!</Code>
        </Body>
    </>
  )
}
