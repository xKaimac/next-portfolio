import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
    margin: 2rem auto;
    max-width: 700px;
    padding: 0 1rem;
`

export const List = styled(motion.ol)`
    list-style-type: none;
    margin: 1rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Links = styled.a`
    color: #0070f3;
    text-decoration: none;
    font-size: 1.2rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`

export const Icon = styled.img`
    width: 7rem;
    height: 7rem;

    @media screen and (max-width: 768px) {
        width: 5rem;
        height: 5rem;
        margin: 0;
    }
`