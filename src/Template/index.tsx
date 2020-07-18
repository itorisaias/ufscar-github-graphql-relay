import React from 'react';

import NavBar from './NavBar'
import Main from './Main'
import Footer from './Footer'

import { Container } from './styles';

const Template: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Main />
      <Footer />
    </Container>
  );
}

export default Template;
