import React from "react";

import { CustomBody } from "@/components/pages/body.js";
import { CustomHead } from "@/components/pages/head.js";
import { CodeLinks } from "@/components/pages/codeLinks";
import { Title } from "@/components/pages/title.js";
import { ArticleTemplate } from "@/components/pages/articleTemplate.js";

const head = "//Scene Graphs";
const title = "My First Publication";
const body = (
  <React.Fragment>
    <p>
      {"I'm"} extremely proud to say that this is my first published paper. My
      role in this research project was to evaluate the relationships within
      scene graphs and test different data pruning methods. To evaluate these
      methods, model performance in both training speed and accuracy on unseen
      images were tested and recorded. If you would like to read the paper for
      the full details and scope of this research, please visit the publication
      <a href=""> here.</a>
    </p>

    <h2>Key Achievements:</h2>

    <ol>
      <li>
        <strong>Q1 Publication: </strong>
        Getting a Q1 publication in a respected journal is a dream for any
        academic, let alone one that is still in University.
      </li>
      <li>
        <strong>Developing A Novel Approach To VQA: </strong>
        During the course of this research, we developed a novel technique when
        pruning known scene graph data to improve overall model accuracy, and as
        a byproduct, training times.
      </li>
    </ol>
  </React.Fragment>
);
const code = "Head over to my github to see the codebase";
const link1href = "https://github.com/xKaimac/GraphVQA";
const link1src =
  "https://res.cloudinary.com/dhfmjugt0/image/upload/v1680203132/iconmonstr_github_3_328939ca1b.svg?updated_at=2023-03-30T19:05:33.717Z";

export default function SceneGraphs() {
  return (
    <ArticleTemplate>
      <CustomHead text={head} />
      <Title text={title} />
      <CustomBody text={body} />
      <CodeLinks text={code} link1href={link1href} link1src={link1src} />
    </ArticleTemplate>
  );
}
