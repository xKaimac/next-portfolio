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

export function YoutubeBody() {
  return (
    <>
      <Body>

        <p>My YouTube channel is dedicated to providing educational content that explores the fascinating world of coding and machine learning, while maintaining an engaging and entertaining approach. By combining technical know-how with captivating storytelling, my channel aims to inspire and educate viewers interested in these fields.</p>
          
        <h2>Key Channel Highlights:</h2>
          
        <ol>
          <li><strong>Coding Tutorials:</strong> I create in-depth coding tutorials that cover various programming languages, frameworks, and tools, making it easy for viewers to learn and expand their skill sets.</li>
          
          <li><strong>Machine Learning Insights:</strong> My channel features videos that delve into the intriguing realm of machine learning, offering clear explanations and demonstrations of essential concepts and techniques.</li>
          
          <li><strong>Edutainment Approach:</strong> I strive to maintain a balance between education and entertainment, presenting complex topics in an engaging and relatable manner to keep viewers captivated.</li>
          
          <li><strong>Project Showcases:</strong> I showcase my personal projects and walk viewers through the development process, sharing valuable insights and experiences along the way.</li>
          
          <li><strong>Community Building:</strong> My channel fosters a supportive and inclusive community where viewers can learn from one another, ask questions, and share their own experiences and expertise.</li>
        </ol>
          
        <p>My YouTube channel serves as a platform to share my passion for coding and machine learning, while also providing an engaging and entertaining experience for viewers. By creating content that educates and inspires, I aim to contribute to the growth and development of the coding and machine learning communities.</p>

      </Body>
    </>
  );
}
