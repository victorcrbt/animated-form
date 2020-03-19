import React from 'react';
import { Dimensions } from 'react-native';
import { Circle } from 'react-native-svg';

import { Container } from './styles';

const FooterBackground = () => {
  return (
    <Container width="100%" height="100%" viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy={Dimensions.get('window').width * 1.5}
        r={Dimensions.get('window').width * 1.5}
        fill="#6923F5"
      />
    </Container>
  );
};

export default FooterBackground;
