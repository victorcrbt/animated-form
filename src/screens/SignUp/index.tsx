import React from 'react';

import { SignUpScreenNavigationProps } from './types';

import FooterBackground from '~/components/FooterBackground';
import Input from '~/components/Input';

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
  return (
    <Container>
      <Input placeholder="Nome" />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Input placeholder="Confirmar senha" />

      <SubmitButton>Registrar</SubmitButton>

      <BottomArea>
        <FooterBackground />

        <SignUpLink onPress={() => navigation.navigate('SignIn')}>
          <SignUpText>Já possui conta? Entre agora!</SignUpText>
        </SignUpLink>
      </BottomArea>
    </Container>
  );
};

export default SignIn;
