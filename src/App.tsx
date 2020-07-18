import React from 'react';
import { ThemeProvider } from 'styled-components';

import Template from 'Template'
import { GlobalStyle } from 'Styles'
import Themes from 'Themes'

function App() {
  return (
    <ThemeProvider theme={Themes}>
      <GlobalStyle />
      <Template />
    </ThemeProvider>
  );
}

export default App;
