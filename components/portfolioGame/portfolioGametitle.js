import styled from 'styled-components'

const Title = styled.h1`
font-size: 2rem;
font-weight: bold;
color: #333;
margin-bottom: 30px;
padding-left: 2rem;
padding-right: 2rem;

@media screen and (max-width: 768px) {
font-size: 24px;
color: #333;
margin-bottom: 30px;
padding: 1rem;
text-align: center;
}
`

export function PortfolioGameTitle() {
    return (
        <Title>
            Use the arrow keys, or WASD, to move. 
            Press the spacebar to interact with objects when prompted. 
            Each building has an object that can be interacted with. 
            This is shown with a glowing outline of the object.
        </Title>
    )
}