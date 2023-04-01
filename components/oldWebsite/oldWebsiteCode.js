import Link from "next/link";

import styled from 'styled-components';

const InfoContainer = styled.div`
font-size: 1.25rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 1rem;


@media screen and (max-width: 768px) {
    padding: 1rem;
}
`

const Icon = styled.img`
max-width: 100%;
max-height: 100%;
width: 7rem;
height: 7rem;
`

export function OldWebsiteCode() {
    return (
        <>
            <InfoContainer>
                <p>
                    To see the source code, check it out on my GitHub!
                </p>
                <Link href="https://github.com/xKaimac/Porfolio-site">
                    <Icon 
                         src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1679919741/github_sign_d6629583be.png?updated_at=2023-03-27T12:22:22.545Z" />
                </Link>
            </InfoContainer>
        </>
    )
}