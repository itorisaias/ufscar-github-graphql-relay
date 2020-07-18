import React from 'react';
import { ThemeProvider } from 'styled-components';

import Template from 'Template'
import { theme, GlobalStyles } from 'Styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Template />
    </ThemeProvider>
  );
}

export default App;
