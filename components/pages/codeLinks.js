import styled from "styled-components";
import Link from "next/link";

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
`;

const Icon = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: 7rem;
    height: 7rem;
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export function CodeLinks({ text, link1href, link1src, link2href, link2src }) {
    return (
        <>
            <InfoContainer>
                <p>{text}</p>
                <LinksContainer>
                    <Link href={link1href}>
                        <Icon src={link1src}/>
                    </Link>
                    {link2href && 
                    <Link href={link2href}>
                        <Icon src={link2src}/>
                    </Link>}
                </LinksContainer>
            </InfoContainer>
        </>
    );
}
