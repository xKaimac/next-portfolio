import styled from "styled-components";

const Body = styled.p`
  font-size: 1.25rem;
  padding-top: 2rem;
  padding: 2rem;
  color: #292929;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Code = styled.a`
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

export function ReefRunBody() {
    return (
      <>
        <Body>
  
          <p>Reef Run is a captivating mobile game developed using Unity and C#, set in a vibrant underwater world where players control a fish navigating through obstacles and combating enemies. This expansive game showcases my ability to create more complex experiences, featuring unlockable levels, characters, and in-app purchases. Like ShapeEscape, Reef Run integrates IronSource and Google Ads SDKs, demonstrating my proficiency in working with third-party tools.</p>
          
          <h2>Key Achievements:</h2>
          
          <ol>
            <li><strong>Advanced game design:</strong> Reef Run&apos;s elaborate design, featuring numerous levels and characters, reflects my growth as a game developer and my ability to create engaging, multi-layered experiences.</li>
          
            <li><strong>Unity and C# expertise:</strong> Leveraging my skills in Unity and C#, Reef Run offers a visually stunning and seamless gameplay experience optimized for mobile devices.</li>
          
            <li><strong>SDK Integration and Monetization:</strong> The successful integration of IronSource, Google Ads SDKs, and in-app purchases in Reef Run highlights my capability to monetize games effectively while maintaining an enjoyable user experience.</li>
          
            <li><strong>Cross-platform development:</strong> Publishing Reef Run on both iOS and Android platforms demonstrates my continued proficiency in cross-platform development, ensuring a consistent and engaging experience for all users.</li>
          
            <li><strong>Project management:</strong> Managing the more complex development process of Reef Run showcases my ability to handle larger projects from inception to completion, delivering a polished and feature-rich final product.</li>
          </ol>
          
          <p>Reef Run stands as an example of my expanding expertise in game development, SDK integration, and cross-platform publishing. This project highlights my dedication to creating rich, immersive experiences for users, as well as my adaptability and proficiency in integrating various tools and technologies throughout the development process.</p>
  
        </Body>
      </>
    );
  }
  
