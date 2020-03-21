import React, { useContext } from 'react';

import { HomeScreenNavigationProps } from './types';

import FooterBackground from '~/components/FooterBackground';

import MainTransitionContext from '~/AppContext';

import { Container, BottomArea, SignInButton, SignUpButton } from './styles';

type HomeProps = {
  navigation: HomeScreenNavigationProps;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { startTransition } = useContext(MainTransitionContext);

  function navigateToSignInScreen() {
    startTransition();
    navigation.navigate('SignIn');
  }

  function navigateToSignUpScreen() {
    startTransition();
    navigation.navigate('SignUp');
  }

  return (
    <Container>
      <BottomArea>
        <FooterBackground />

        <SignInButton onPress={navigateToSignInScreen}>Entrar</SignInButton>

        <SignUpButton onPress={navigateToSignUpScreen}>Registrar</SignUpButton>
      </BottomArea>
    </Container>
  );
};

export default Home;
