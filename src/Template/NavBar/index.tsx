import React from 'react';

import {
  Logo,
  Menu
} from 'Components';

import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Logo />

      <Menu />
    </Container>
  );
}

export default NavBar;
