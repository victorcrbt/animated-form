import React from 'react';

import { HomeScreenNavigationProps } from './types';

import FooterBackground from '~/components/FooterBackground';

import { Container, BottomArea, SignInButton, SignUpButton } from './styles';

type HomeProps = {
  navigation: HomeScreenNavigationProps;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <Container>
      <BottomArea>
        <FooterBackground />

        <SignInButton onPress={() => navigation.navigate('SignIn')}>
          Entrar
        </SignInButton>

        <SignUpButton onPress={(): void => navigation.navigate('SignUp')}>
          Registrar
        </SignUpButton>
      </BottomArea>
    </Container>
  );
};

export default Home;
