import React from 'react';

import { OldWebsiteBody } from '@/components/oldWebsite/oldWebsiteBody';
import { OldWebsiteCode } from '@/components/oldWebsite/oldWebsiteCode';
import { OldWebsiteHead } from '@/components/oldWebsite/oldWebsiteHead';
import { OldWebsiteIframe } from '@/components/oldWebsite/oldWebsiteIframe';
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
`

const Article = styled.div`
border-radius: 1rem;
background-color: #fff;
border: 1px solid #ddd;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease;
`

const Title = styled.h1`
font-size: 2rem;
font-weight: bold;
color: #333;
padding-top:2rem;
margin-bottom: 3rem;
padding-left: 2rem;
padding-right: 2rem;
text-align:center;

@media screen and (max-width: 768px) {
font-size: 24px;
color: #333;
margin-bottom: 30px;
padding: 1rem;
text-align: center;
}
`


export default function oldwebsite() {
  return (
    <Layout>
      <OldWebsiteHead />
      <Container>
        <Article>
          <Title>Interactive view of my old HTML site</Title>
          <OldWebsiteIframe />
          <OldWebsiteBody /> 
          <OldWebsiteCode />
        </Article>
      </Container>
    </Layout>
  )
}