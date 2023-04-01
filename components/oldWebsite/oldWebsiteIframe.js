import styled from 'styled-components'

const Iframe = styled.iframe`
display: block;
margin: 0 auto;
width: 45vw;
height: 60vw;

@media screen and (max-width: 768px) {
    height: 90vh;
    width: 90vw;
}
`

export function OldWebsiteIframe() {
    return (
        <>
            <Iframe 
                    src="https://portfolio-site-gamma-snowy.vercel.app" 
                    name="myiFrame"  
                    allowfullscreen >
            </Iframe>
        </>
    )
}