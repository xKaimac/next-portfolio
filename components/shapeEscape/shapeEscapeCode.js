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

export function ShapeEscapeCode() {
  return (
    <>
      <InfoContainer>
        <p>To see the game in action, check it out below!</p>
        <LinksContainer>
          <Link href="https://play.google.com/store/apps/details?id=com.Kaimac.com.unity.ShapeEscape">
            <Icon
              src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1683625393/icons8-google-play_jsfnqx.svg"
            />
          </Link>
          <Link href="https://apps.apple.com/au/app/shape-escape/id6447502113">
            <Icon
              src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1683625391/icons8-app-store_rpvbwa.svg"
            />
          </Link>
        </LinksContainer>
      </InfoContainer>
    </>
  );
}
