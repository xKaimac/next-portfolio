import { Iframe } from '../../styles/iframe.styled'

export function CustomIframe({ src, variants }) {
    const { height = '45vw' } = variants || {};
    const { scrolling = 'no' } = variants || {};

    return(
        <Iframe
            src={src} 
            name="myiFrame" 
            scrolling={scrolling} 
            frameborder="1" 
            height={height}
            marginheight="0px" 
            marginwidth="0px" 
            allowfullscreen
        />
    )
}