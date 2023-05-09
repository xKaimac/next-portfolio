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

export function YoutubeLink() {
  return (
    <>
      <InfoContainer>
        <p>Check out my videos!</p>
        <LinksContainer>
          <Link href="https://www.youtube.com/channel/UC4SIj1nrp-CqWtkz_qsbpWg">
            <Icon
              src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1683627582/icons8-youtube_htj9vm.svg"
            />
          </Link>
        </LinksContainer>
      </InfoContainer>
    </>
  );
}
