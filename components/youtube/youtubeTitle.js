import styled from 'styled-components'

const Title = styled.h1`
font-size: 3rem;
font-weight: bold;
color: #333;
margin-bottom: 30px;
padding-top: 2rem;
padding-left: 2rem;
padding-right: 2rem;
text-align: center;

@media screen and (max-width: 768px) {
font-size: 24px;
color: #333;
margin-bottom: 30px;
padding: 1rem;
text-align: center;
}
`

export function YoutubeTitle() {
    return (
        <Title>
            My Youtube Channel
        </Title>
    )
}