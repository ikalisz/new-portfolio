import React from 'react';
import {
  ThemeProvider,
} from '@material-ui/core/styles'
import styled from 'styled-components'

function App() {
  return (
    <ThemeProvider>
      <Page>
        
      </Page>
    </ThemeProvider>
  );
}

export default App;

const Page = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    overflow-x: hidden;
    padding-right: 0;
  }
`