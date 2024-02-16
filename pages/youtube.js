import React from 'react';

import { CustomBody } from '@/components/pages/body.js';
import { CustomHead } from '@/components/pages/head.js';
import { CodeLinks } from '@/components/pages/codeLinks';
import { Title } from '@/components/pages/title.js';
import { CustomIframe } from '@/components/pages/iFrame';
import { ArticleTemplate } from '@/components/pages/articleTemplate';

const head = "//My Youtube Channel";
const title = "My YouTube Channel";
const body = (
  <React.Fragment>
    <p>
      My YouTube channel is dedicated to providing educational   content that explores the fascinating world of coding and   machine learning, while maintaining an engaging and   entertaining approach. By combining technical know-how with   captivating storytelling, my channel aims to inspire and  educate viewers interested in these fields.
    </p>
    <h2>Key Channel Highlights:</h2>
    <ol>
      <li>
        <strong>Coding Tutorials:</strong> I create in-depth  coding tutorials that cover various programming languages,   frameworks, and tools, making it easy for viewers to learn  and expand their skill sets.
      </li>
      <li>
        <strong>Machine Learning Insights:</strong> My channel  features videos that delve into the intriguing realm of  machine learning, offering clear explanations and  demonstrations of essential concepts and techniques.
      </li>
      <li>
        <strong>Edutainment Approach:</strong> I strive to  maintain a balance between education and entertainment,  presenting complex topics in an engaging and relatable   manner to keep viewers captivated.
      </li>
      <li>
        <strong>Project Showcases:</strong> I showcase my   personal projects and walk viewers through the development  process, sharing valuable insights and experiences along   the way.
      </li>
      <li>
        <strong>Community Building:</strong> My channel fosters   a supportive and inclusive community where viewers can  learn from one another, ask questions, and share their own   experiences and expertise.
      </li>
    </ol>
    <p>
      My YouTube channel serves as a platform to share my  passion for coding and machine learning, while also providing  an engaging and entertaining experience for viewers. By  creating content that educates and inspires, I aim to  contribute to the growth and development of the coding and   machine learning communities.
    </p>
  </React.Fragment>
);
const videoIntro = "Check out my videos!";
const link1href = "https://www.youtube.com/channel/UC4SIj1nrp-CqWtkz_qsbpWg";
const link1src = "https://res.cloudinary.com/dhfmjugt0/image/upload/v1683627582/icons8-youtube_htj9vm.svg";
const videoSource = "https://www.youtube.com/embed/s-lulbDK-8c"
const variant = { height: "25.31vw" };

export default function Youtube() {
  return (
    <ArticleTemplate>
      <CustomHead text={head} />
      <Title text={title}/>
      <CustomIframe src={videoSource}
                    variants={variant}/>
      <CustomBody text={body} />
      <CodeLinks text={videoIntro}
                 link1href={link1href}
                 link1src={link1src} 
      />
    </ArticleTemplate>
  );
}