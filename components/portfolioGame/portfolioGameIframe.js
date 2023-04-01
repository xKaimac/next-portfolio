import styled from 'styled-components'

const Iframe = styled.iframe`
display: block;
margin: 0 auto;
width: 45vw;
height: 45vw;


@media screen and (max-width: 768px) {
    height: 90vw;
    width: 90vw;
}
`

export function PortfolioGameIframe() {
    return(
        <Iframe
            src="https://portfolio-site-gamma-snowy.vercel.app/pyGame.html" 
            name="myiFrame" 
            scrolling="no" 
            frameborder="1" 
            marginheight="0px" 
            marginwidth="0px" 
            allowfullscreen>
        </Iframe>
    )
}