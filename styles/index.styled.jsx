import styled from 'styled-components';
import { motion } from "framer-motion";

export const LatestBlog = styled.div`
  padding-top: 50px;
  padding-bottom: 25px;
`

export const IndexList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

export const IndexItem = styled(motion.li)`
margin-bottom: 0px;
`

export const Subtitle = styled.p`
font-size: 16px;
color: #666;
margin-bottom: 0;
}
`

export const IndexH2 = styled.h2`
font-size: 24px;
font-weight: bold;
color: #333;
margin-bottom: 30px;
`

export const IndexPostTitle = styled.h3`
margin-top: 0;
font-size: 24px;
font-weight: bold;
color: #333;
margin-bottom: 5px;
`

const Left = styled(motion.div) `
flex: 1;
font-size: 5vw;
font-weight: bold;

@media only screen and (max-width: 768px){
max-height: 50vh;
    max-width: 100vw;
    text-align: center;
    font-size: 7vw;
    align-items: center;
}
`;

const Right = styled(motion.div) `
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 768px){
    max-height: 50vh;
    max-width: 100vw;
    text-align: center;
    font-size: 7vw;
    align-items: center;
  }
`;