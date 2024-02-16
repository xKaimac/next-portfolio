import styled from "styled-components";
import { Left, Right } from '../../styles/index.styled.jsx';

import Link from "next/link";

const Img = styled.img `
width: 30vw;

@media only screen and (max-width: 768px){
  width: 80vw;
} 
`

const Container = styled.div `
  max-width: 100vw;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  flex-direction: row;
  max-height: 100vh;
  padding: 5rem;

  @media only screen and (max-width: 768px) {
    max-width: 100vw;
    margin: 0 auto;
    padding: 0px;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    padding: 5rem;
  }
`

export function IndexWelcome() {
  const left = {visible: { opacity: 1, x:0 }, hidden: { opacity: 0, x:-100 }};
  const right = {visible: { opacity: 1, y:0 }, hidden: { opacity: 0, y:100 }};

  return (
    <Container>
      <Left initial="hidden"
            animate="visible" 
            exit="hidden"
            variants={left}
            transition={{ duration: 1 }}
      >
        <h1>Welcome to My Portfolio.</h1>
      </Left>
      <Right  initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{duration:.2, delay: .75 }} 
              variants={right} 
      >
        <Link href="/portfoliogame" >
          <Img src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1684060291/ezgif_com_gif_maker_a621f6de87_016f9abeac.gif" 
               alt="Image could not be loaded" />
        </Link>
      </Right>
    </Container>
  )
}