import React from 'react';
import {
  ThemeProvider,
} from '@material-ui/core/styles'
import {
  GitHub,
  LinkedIn,
  Instagram
} from '@material-ui/icons'
import styled from 'styled-components'
import QuickLink from './QuickLink'

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