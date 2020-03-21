import React, { useContext } from 'react';
import { useIsFocused } from '@react-navigation/native';

import { SignUpScreenNavigationProps } from './types';

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

type SignUpProps = {
  navigation: SignUpScreenNavigationProps;
};

const SignIn: React.FC<SignUpProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { startTransition } = useContext(MainTransitionContext);

  function navigateToSignInScreen() {
    startTransition();
    navigation.navigate('SignIn');
  }

  function handleSubmit() {
    startTransition();
    navigation.navigate('Home');
  }

  return (
    <Container>
      <SlidingView shouldExecute={isFocused} duration={750}>
        <Input placeholder="Nome" />
      </SlidingView>

      <SlidingView shouldExecute={isFocused} duration={750} delay={50}>
        <Input placeholder="E-mail" />
      </SlidingView>

      <SlidingView shouldExecute={isFocused} duration={750} delay={100}>
        <Input placeholder="Senha" />
      </SlidingView>

      <SlidingView shouldExecute={isFocused} duration={750} delay={150}>
        <Input placeholder="Confirmar senha" />
      </SlidingView>

      <SlidingView shouldExecute={isFocused} duration={750} delay={200}>
        <SubmitButton onPress={handleSubmit}>Registrar</SubmitButton>
      </SlidingView>

      <BottomArea>
        <FooterBackground />

        <SignUpLink onPress={navigateToSignInScreen}>
          <SignUpText>Já possui conta? Entre agora!</SignUpText>
        </SignUpLink>
      </BottomArea>
    </Container>
  );
};

export default SignIn;
