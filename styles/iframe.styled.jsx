import styled from 'styled-components';

export const Iframe = styled.iframe`
    display: block;
    margin: 0 auto;
    width: 45vw;
    height: ${({ height }) => height || '45vw'};
    
    @media screen and (max-width: 768px) {
        height: 90vw;
        width: 90vw;
    }
`