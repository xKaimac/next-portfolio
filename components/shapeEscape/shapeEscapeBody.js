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

export function ShapeEscapeBody() {
  return (
    <>
      <Body>
        <p>
            ShapeEscape is a mobile game developed using Unity and C# that demonstrates my ability to create engaging and immersive experiences on both iOS and Android platforms. The game presents an exciting geometric challenge where players shoot a ball into shapes, each having the same number of lives as its sides. This project highlights my technical skills in game development and my proficiency in integrating third-party SDKs.
        </p>
        <h2>Key Achievements:</h2>
        <ol>
          <li><strong>Unity and C# expertise:</strong> ShapeEscape showcases my competence in using Unity and C# for creating a visually appealing and engaging game, optimized for mobile devices.</li>

          <li><strong>SDK Integration:</strong> The successful integration of IronSource and Google Ads SDKs in ShapeEscape demonstrates my ability to work with third-party tools, effectively monetizing the game without compromising the user experience.</li>

          <li><strong>Cross-platform development:</strong> Publishing ShapeEscape on both iOS and Android platforms highlights my proficiency in cross-platform development, ensuring seamless gameplay and wide accessibility for users.</li>

          <li><strong>Problem-solving and creativity:</strong> ShapeEscape&rsquo;s unique gameplay concept required inventive thinking and problem-solving skills to design challenging levels and create an enjoyable gaming experience.</li>

          <li><strong>Project management:</strong> Completing ShapeEscape as my first published game demonstrates my ability to manage projects from concept to completion, ensuring a polished final product that meets the high standards of the iOS and Android app stores.</li>
        </ol>
        <p>
          ShapeEscape stands as a testament to my technical capabilities in game development, SDK integration, and cross-platform publishing. This project showcases my commitment to creating high-quality, engaging experiences for users and my ability to adapt and integrate various tools and technologies in the development process.
        </p>
      </Body>
    </>
  );
}
