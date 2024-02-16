import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    display: flex;
    max-width: 100vw;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-bottom: 2rem;
    justify-content: center;
`

export const List = styled(motion.ol)`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    ${({ alignItems }) => alignItems && `align-items: ${alignItems};    `}
    ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom};`}
`
export const Item = styled(motion.li)`
    flex-basis: calc(33.33% - 1rem);
    padding-left: .5rem; 
    padding-right: .5rem;
    padding-bottom: 1rem;
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}

    @media screen and (max-width: 1280px) {
        flex-basis: calc(50% - 1rem);
        padding-bottom: 1rem;
        padding-top: 0;
        max-width: 85vw;
    }
`

export const Posts = styled.a`
    display: flex;
    background-color: #ffffff;
    border: 2px solid #ddd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    transition: ease-in-out 0.1s;
    text-decoration: none;
    border-radius: 1rem;
    ${({ height }) => height && `height: ${height};`}
    ${({ width }) => width && `width: ${width};`}
    align-items: center;
    ${({ justifyContent }) => justifyContent && `justify-content: $ {justifyContent};`}

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border: 2px solid #5CB0FF;
    }

    @media screen and (max-width: 768px) {
        width: 85vw;
        height: 85vw;
    }
`

export const PostTitle = styled.h2`
    margin-top: 0;
    ${({ marginBottom }) => marginBottom && `margin-bottom: $   {marginBottom};`}
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    padding: 1rem;

    @media screen and (max-width: 1280px) {
        font-size: 1.5rem;
        padding-top: 1rem;
    }
`
export const Subtitle = styled.p`
    font-size: 1.25rem;
    color: #666;
    margin-bottom: 0;
`

export const Dates = styled.p`
    font-size: 1rem;
    color: #999;
    margin-top: 5px;
`

export const Body = styled.p`
    font-size: 1.25rem;
    padding-left: 5rem;
    padding-right: 5rem;
    color: #292929;

    @media screen and (max-width: 810px) {
        font-size: 1.1rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`