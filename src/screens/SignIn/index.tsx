import React from 'react';

import { SignInScreenNavigationProps } from './types';

import FooterBackground from '~/components/FooterBackground';
import Input from '~/components/Input';

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
  return (
    <Container>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />

      <SubmitButton>Entrar</SubmitButton>

      <BottomArea>
        <FooterBackground />

        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpText>Ainda não possui conta? Crie agora!</SignUpText>
        </SignUpLink>
      </BottomArea>
    </Container>
  );
};

export default SignIn;
