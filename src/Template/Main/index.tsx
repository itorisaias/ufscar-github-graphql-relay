import React from 'react';

import {
  Search,
  Result
} from 'Components';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Search />
      <Result />
    </Container>
  );
}

export default Main;
