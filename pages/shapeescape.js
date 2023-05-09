import React from 'react';

import { ShapeEscapeBody } from '@/components/shapeEscape/shapeEscapeBody.js';
import { ShapeEscapeHead } from '@/components/shapeEscape/shapeEscapeHead.js';
import { ShapeEscapeCode } from '@/components/shapeEscape/shapeEscapeCode.js';
import { ShapeEscapeTitle } from '@/components/shapeEscape/shapeEscapeTitle.js';

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

export default function ShapeEscape() {
  return (
    <Layout>
      <Container>
        <Article>
        <ShapeEscapeHead />
        <ShapeEscapeTitle />
        <ShapeEscapeBody />
        <ShapeEscapeCode />
        </Article>
      </Container>
    </Layout>
  )
}
