import React, { FC } from 'react';
import { Image } from 'react-native'

import { Container } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  )
}


export default SignIn;
