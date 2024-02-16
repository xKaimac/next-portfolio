import React from 'react';

import { CustomBody } from '@/components/pages/body.js';
import { CustomHead } from '@/components/pages/head.js';
import { CodeLinks } from '@/components/pages/codeLinks.js';
import { Title } from '@/components/pages/title.js';
import { ArticleTemplate } from '@/components/pages/articleTemplate';

const head = "//Shape Escape";
const title = "My First Mobile Game";
const body = (
  <React.Fragment>
    <p>
        ShapeEscape is a mobile game developed using Unity and C#   that demonstrates my ability to create engaging and   immersive experiences on both iOS and Android platforms.  The game presents an exciting geometric challenge where  players shoot a ball into shapes, each having the same   number of lives as its sides. This project highlights my  technical skills in game development and my proficiency  in integrating third-party SDKs.
    </p>
    <h2>Key Achievements:</h2>
    <ol>
      <li>
        <strong>Unity and C# expertise:</strong> ShapeEscape  showcases my competence in using Unity and C# for creating   a visually appealing and engaging game, optimized for   mobile devices.
      </li>
      <li>
        <strong>SDK Integration:</strong> The successful  integration of IronSource and Google Ads SDKs in   ShapeEscape demonstrates my ability to work with  third-party tools, effectively monetizing the game without   compromising the user experience.</li>
      <li>
        <strong>Cross-platform development:</strong> Publishing   ShapeEscape on both iOS and Android platforms highlights my   proficiency in cross-platform development, ensuring   seamless gameplay and wide accessibility for users.
      </li>
      <li>
        <strong>Problem-solving and creativity:</strong>  ShapeEscape&rsquo;s unique gameplay concept required   inventive thinking and problem-solving skills to design   challenging levels and create an enjoyable gaming   experience.
      </li>
      <li>
        <strong>Project management:</strong> Completing   ShapeEscape as my first published game demonstrates my  ability to manage projects from concept to completion,   ensuring a polished final product that meets the high   standards of the iOS and Android app stores.
      </li>
    </ol>
    <p>
      ShapeEscape stands as a testament to my technical   capabilities in game development, SDK integration, and  cross-platform publishing. This project showcases my   commitment to creating high-quality, engaging experiences   for users and my ability to adapt and integrate various   tools and technologies in the development process.
    </p>
  </React.Fragment>
);
const code = "To see the game in action, check it out below!";
const link1href = "https://play.google.com/store/apps/details?id=com.Kaimac.com.unity.ShapeEscape";
const link1src = "https://res.cloudinary.com/dhfmjugt0/image/upload/v1683625393/icons8-google-play_jsfnqx.svg";
const link2href = "https://apps.apple.com/au/app/shape-escape/id6447502113";
const link2src = "https://res.cloudinary.com/dhfmjugt0/image/upload/v1683625391/icons8-app-store_rpvbwa.svg";

export default function ShapeEscape() {
  return (
    <ArticleTemplate>
      <CustomHead text={head} />
      <Title text={title} />
      <CustomBody text={body} />
      <CodeLinks text={code}
                 link1href={link1href}
                 link1src={link1src}
                 link2href={link2href}
                 link2src={link2src}
      />
    </ArticleTemplate>
  );
}