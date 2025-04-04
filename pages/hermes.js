import React from "react";

import { CustomBody } from "@/components/pages/body.js";
import { CustomHead } from "@/components/pages/head.js";
import { CodeLinks } from "@/components/pages/codeLinks";
import { Title } from "@/components/pages/title.js";
import { ArticleTemplate } from "@/components/pages/articleTemplate.js";

const head = "//Hermes";
const title = "An Open-Source Messaging App";
const body = (
  <React.Fragment>
    <p>
      As far as personal projects go, this has been my largest and most
      ambitious to date. While there are definitely still some features that I
      would like to add, I have created a functioning Social Media platform with
      instant messaging for 1-1 or group chats, and friends list features. If
      you want to see it in action, check it out at{" "}
      <a href="https://www.hermes-messenger.xyz">hermes-messenger.xyz</a>
    </p>

    <h2>Key Achievements:</h2>

    <ol>
      <li>
        <strong>Modern Tech Stack:</strong>
        This project uses a number of modern web development technologies, such
        as Vite, React, Typescript, Tailwind, Express, and Postgres.
      </li>
      <li>
        <strong>Fullstack Development Experience:</strong>I created the full
        front and back end from scratch, using many different endpoints and
        database calls to efficiently navigate the complexity of creating a full
        app of this scale.
      </li>
      <li>
        <strong>Maintainability:</strong>I have tried to make this project as
        modular and scalable as possible, so that future maintenance becomes
        significantly easier. It has been good practice for working in a
        professional environment with lots of moving parts.
      </li>
    </ol>
  </React.Fragment>
);
const code = "Head over to my github to see the codebase";
const link1href = "https://github.com/xKaimac/Hermes";
const link1src =
  "https://res.cloudinary.com/dhfmjugt0/image/upload/v1680203132/iconmonstr_github_3_328939ca1b.svg?updated_at=2023-03-30T19:05:33.717Z";

export default function Hermes() {
  return (
    <ArticleTemplate>
      <CustomHead text={head} />
      <Title text={title} />
      <CustomBody text={body} />
      <CodeLinks text={code} link1href={link1href} link1src={link1src} />
    </ArticleTemplate>
  );
}
