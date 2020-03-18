import React from 'react';

import RootImport from '~/components/RootImport';

import { Container, Title } from './styles';

const Home = () => {
  return (
    <Container>
      <Title>Hello, React Native!</Title>

      <RootImport />
    </Container>
  );
};

export default Home;
