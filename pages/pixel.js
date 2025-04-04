import React from "react";

import { CustomBody } from "@/components/pages/body.js";
import { CustomHead } from "@/components/pages/head.js";
import { CodeLinks } from "@/components/pages/codeLinks";
import { Title } from "@/components/pages/title.js";
import { ArticleTemplate } from "@/components/pages/articleTemplate.js";

const head = "//Pixels";
const title = "An Image To Pixel Art Converter";
const body = (
  <React.Fragment>
    <p>
      As part of my interest in broadening my skillset and trying new things, I
      decided that it would be fun to create a tool that will take any image and
      create a pixel art-esque version of it. This tool was created using Python
      with OpenCV and ImageIO as the image processing libraries to help with the
      data transformations.
    </p>

    <h2>Key Achievements:</h2>

    <ol>
      <li>
        <strong>Image Processing Practice: </strong>
        Although I have completed previous research in Computer Vision, I have
        not spent a large amount of time actually processing and modifying
        images. This was a great, fun project that allowed me to play with
        different methods of altering an image.
      </li>
      <li>
        <strong>Machine Learning Fundamentals: </strong>I took inspiration from
        the Kernels that are used in Convolutional Neural Networks when dealing
        with image processing to create this tool. The way that the image is
        blurred and the chunks are calculated use the same theory to process and
        modify the image.
      </li>
    </ol>
  </React.Fragment>
);
const code =
  "If you're interesting in taking a look or using the tool, head over to the Github repo!";
const link1href = "https://github.com/xKaimac/PixelArtConverter";
const link1src =
  "https://res.cloudinary.com/dhfmjugt0/image/upload/v1680203132/iconmonstr_github_3_328939ca1b.svg?updated_at=2023-03-30T19:05:33.717Z";

export default function Pixel() {
  return (
    <ArticleTemplate>
      <CustomHead text={head} />
      <Title text={title} />
      <CustomBody text={body} />
      <CodeLinks text={code} link1href={link1href} link1src={link1src} />
    </ArticleTemplate>
  );
}
