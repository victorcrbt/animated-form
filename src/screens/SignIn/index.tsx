import React, { useContext } from 'react';
import { useIsFocused } from '@react-navigation/native';

import { SignInScreenNavigationProps } from './types';

import FooterBackground from '~/components/FooterBackground';
import Input from '~/components/Input';
import SlidingView from '~/components/SlidingView';

import MainTransitionContext from '~/AppContext';

import {
  Container,
  BottomArea,
  SubmitButton,
  SignUpLink,
  SignUpText,
} from './styles';

type SignInProps = {
  navigation: SignInScreenNavigationProps;
};

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { startTransition } = useContext(MainTransitionContext);

  function navigateToSignUpScreen() {
    startTransition();
    navigation.navigate('SignUp');
  }

  function handleSubmit() {
    startTransition();
    navigation.navigate('Home');
  }

  return (
    <Container>
      <SlidingView shouldExecute={isFocused} duration={750}>
        <Input placeholder="E-mail" />
      </SlidingView>

      <SlidingView shouldExecute={isFocused} delay={50} duration={750}>
        <Input placeholder="Senha" />
      </SlidingView>

      <SlidingView shouldExecute={isFocused} duration={750} delay={100}>
        <SubmitButton onPress={handleSubmit}>Entrar</SubmitButton>
      </SlidingView>

      <BottomArea>
        <FooterBackground />

        <SignUpLink onPress={navigateToSignUpScreen}>
          <SignUpText>Ainda não possui conta? Crie agora!</SignUpText>
        </SignUpLink>
      </BottomArea>
    </Container>
  );
};

export default SignIn;
