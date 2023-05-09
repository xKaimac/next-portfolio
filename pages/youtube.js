import React from 'react';

import { YoutubeBody } from '@/components/youtube/youtubeBody.js';
import { YoutubeHead } from '@/components/youtube/youtubeHead.js';
import { YoutubeLink } from '@/components/youtube/youtubeLink.js';
import { YoutubeTitle } from '@/components/youtube/youtubeTitle.js';
import { YoutubeVideo } from '@/components/youtube/youtubeVideo.js';

import Layout from '@/components/animations/layout';

import styled from 'styled-components';

const Container = styled.div`
max-width: 50vw;
padding-top: 5rem;
padding-bottom: 5rem;
padding-left: 5rem;
padding-right: 5rem;
margin: 0 auto;
justify-content: center;

@media screen and (max-width: 768px) {
max-width: 100%;
margin: 0 auto;
padding: 1rem;
border-radius: 0;
}
`

const Article = styled.div`
border-radius: 1rem;
background-color: #fff;
border: 1px solid #ddd;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease;
`

export default function Youtube() {
  return (
    <Layout>
      <Container>
        <Article>
        <YoutubeHead />
        <YoutubeTitle />
        <YoutubeVideo />
        <YoutubeBody />
        <YoutubeLink />
        </Article>
      </Container>
    </Layout>
  )
}
