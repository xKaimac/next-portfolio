import styled from 'styled-components'

const Iframe = styled.iframe`
display: block;
margin: 0 auto;
width: 45vw;
height: 25.31vw;


@media screen and (max-width: 768px) {
    height: 90vw;
    width: 90vw;
}
`
export function YoutubeVideo() {
    return(
        <Iframe
            src={`https://www.youtube.com/embed/s-lulbDK-8c`}
            name="myiFrame" 
            scrolling="no" 
            frameborder="1" 
            marginheight="0px" 
            marginwidth="0px" 
            allowfullscreen>
        </Iframe>
    )
};
