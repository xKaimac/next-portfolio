import React from 'react';

import { CustomBody } from '@/components/pages/body.js';
import { CustomHead } from '@/components/pages/head.js';
import { CodeLinks } from '@/components/pages/codeLinks';
import { Title } from '@/components/pages/title.js';
import { ArticleTemplate } from '@/components/pages/articleTemplate.js';

const head = "//Reef Run"
const title = "My Second Published Title"
const body = (
  <React.Fragment>
    <p>Reef Run is a captivating mobile game developed using  Unity and C#, set in a vibrant underwater world where players  control a fish navigating through obstacles and combating  enemies. This expansive game showcases my ability to create  more complex experiences, featuring unlockable levels,   characters, and in-app purchases. Like ShapeEscape, Reef Run  integrates IronSource and Google Ads SDKs, demonstrating my  proficiency in working with third-party tools.</p>

    <h2>Key Achievements:</h2>

    <ol>
      <li>
        <strong>Advanced game design:</strong> Reef Run&apos;s  elaborate design, featuring numerous levels and characters,  reflects my growth as a game developer and my ability to   create engaging, multi-layered experiences.
      </li>
      <li>
        <strong>Unity and C# expertise:</strong> Leveraging my  skills in Unity and C#, Reef Run offers a visually stunning  and seamless gameplay experience optimized for mobile  devices.
      </li>
      <li>
        <strong>SDK Integration and Monetization:</strong> The  successful integration of IronSource, Google Ads SDKs, and   in-app purchases in Reef Run highlights my capability to  monetize games effectively while maintaining an enjoyable  user experience.
      </li>
      <li>
        <strong>Cross-platform development:</strong> Publishing   Reef Run on both iOS and Android platforms demonstrates my  continued proficiency in cross-platform development,   ensuring a consistent and engaging experience for all users.
      </li>
      <li>
        <strong>Project management:</strong> Managing the more  complex development process of Reef Run showcases my   ability to handle larger projects from inception to   completion, delivering a polished and feature-rich final  product.
      </li>
    </ol>
    <p>
      Reef Run stands as an example of my expanding expertise in   game development, SDK integration, and cross-platform   publishing. This project highlights my dedication to creating   rich, immersive experiences for users, as well as my  adaptability and proficiency in integrating various tools and  technologies throughout the development process.
    </p>
  </React.Fragment>
);
const code = "To see the game in action, check it out below!";
const link1href = "https://play.google.com/store/apps/details?id=com.kaimac.com.unity.ReefRun";
const link1src = "https://res.cloudinary.com/dhfmjugt0/image/upload/v1683625393/icons8-google-play_jsfnqx.svg";

export default function ReefRun() {
  return (
    <ArticleTemplate>
      <CustomHead text={head} />
      <Title text={title}/>
      <CustomBody text={body}/>
      <CodeLinks text={code} 
                 link1href={link1href}
                 link1src={link1src}
      />
    </ArticleTemplate>
  );
}