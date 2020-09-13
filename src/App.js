import React from 'react';
import {
  amber,
  blue,
  deepPurple,
  green,
  indigo,
  lightBlue,
  orange,
  pink,
  red,
} from '@material-ui/core/colors'
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
import Typing from './Typing'
import Rotate from './Rotate'

function App() {
  return (
    <ThemeProvider>
      <Page>
        <QuickLinks>
          <QuickLink 
            Icon={GitHub}
            color="#000"
            link="https://github.com/ikalisz"
          />
          <QuickLink
            Icon={LinkedIn}
            link="https://www.linkedin.com/in/ikalisz/"
            color={blue[800]}
          />
        </QuickLinks>
        <Rotate />
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
    justify-content: center;
    overflow-x: hidden;
    padding-right: 0;
  }
`

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5em;
  margin-top: 3em;
  @media (max-width: 1000px) {
    flex-direction: row;
    margin-right: 0;
  }
`