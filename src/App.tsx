import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RelayEnvironmentProvider } from 'relay-hooks';

import Template from 'Template'
import { GlobalStyle } from 'Styles'
import Themes from 'Themes'

import RelayEnvironment from "Relay";

function App() {
  return (
    <ThemeProvider theme={Themes}>
      <GlobalStyle />
      <RelayEnvironmentProvider environment={RelayEnvironment} >
        <Template />
      </RelayEnvironmentProvider>
    </ThemeProvider>
  );
}

export default App;
