import React from 'react';
import Typography from '@material-ui/core/Typography'

import Logo from 'Components/Logo'

import { Container, Content } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Logo />

      <Content>
        <Typography variant="body1" color="primary">
          {new Date().getFullYear()}
          &copy; 6 Tech.
        </Typography>

        <Typography variant="body1" color="primary">0.0.1</Typography>
      </Content>
    </Container>
  );
}

export default Footer;
