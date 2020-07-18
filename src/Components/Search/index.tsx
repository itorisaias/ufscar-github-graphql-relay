import React, { useState } from 'react';
import {
  TextField
} from '@material-ui/core';

import { Container } from './styles';

const Search: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <Container>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Buscar desenvolvedores"
        variant="outlined"
        size="small"
        fullWidth
      />
    </Container>
  );
}

export default Search;