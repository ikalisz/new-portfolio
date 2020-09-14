import React from 'react';
import {
  blue,
  deepPurple,
  indigo,
  lightBlue,
  red,
} from '@material-ui/core/colors'
import {
  GitHub,
  LinkedIn,
  ExpandMore,
} from '@material-ui/icons'
import {
  Gmail,
} from 'mdi-material-ui'
import styled from 'styled-components'
import QuickLink from './QuickLink'
import Rotate from './Rotate'

function App() {
  return (
    <Page>
      <Info>
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
          <QuickLink
            Icon={Gmail}
            color={red[500]}
            link="mailto:ikalisz@yahoo.com"
          />
        </QuickLinks>
        <InfoContainer>
          <Name>
            Ian K
          </Name>
          <RotateContainer>
            <Rotate />
          </RotateContainer>
        </InfoContainer>
        <ScrollIndicator>
          <ExpandMore
            fontSize="large"
          />
        </ScrollIndicator>
      </Info>
      <Boxes>
        <Box
          color={deepPurple}
        >
          <BoxWrapper>
            <Title>
              Athletes.gg Inc.
            </Title>
            <SubTitle>
              Software Engineer
            </SubTitle>
            <BoxContent>
              <Agg>
                athletes.gg
              </Agg>
              <AggSlogan>
                The data platform for esports athletes.
              </AggSlogan>
            </BoxContent>
            <Dates>
              <Start>July 2019</Start>
              <End>Current</End>
            </Dates>
          </BoxWrapper>
        </Box>
        <Box
          color={lightBlue}
        >

        </Box>
      </Boxes>
    </Page>
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

const Boxes = styled.div`
  align-self: flex-end;
  display: inline-flex;
  flex-direction: column;
  width: 60em;
  max-width: 100%;
`

const Box = styled.div`
  animation: GradientBackground 15s ease infinite;
  background: linear-gradient(270deg, ${(p) => p.startColor || p.color.A100}, ${(p) => p.endColor || p.color.A400});
  background-size: 200% 200%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: ${(p) => (p.shrink ? 'auto' : '75vh')};
  padding: 5vh;
  @media (max-width: 1000px) {
    font-size: 0.75em;
  }
`

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Title = styled.div`
  color: #fff;
  font-family: VT323;
  font-size: 3em;
  text-transform: uppercase;
`

const SubTitle = styled.div`
  color: #fff;
  font-family: VT323;
  font-size: 2em;
`

const BoxContent = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`

const Agg = styled.div`
  font-family: Comfortaa;
  font-weight: bold;
  font-size: 7em;
  @media (max-width: 1000px) {
    font-size: 4em;
  }
`

const AggSlogan = styled.div`
  font-family: Roboto;
  font-size: 1.5em;
  margin-top: 0.5em;
  @media (max-width: 1000px) {
    font-size: 1.25em;
  }
`

const InfoContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 4em;
  margin-bottom: -7em;
  margin-right: 5em;
  @media (max-width: 1000px) {
    margin-right: 0;
    align-items: center;
  }
`

const Info = styled.div`
  align-items: flex-end;
  align-self: flex-start;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0em;
  @supports (-webkit-appearance:none) {
    min-height: calc(100vh - 56px);
  }
  @media (max-width: 1000px) {
    min-height: 100vh;
    align-items: center;
    font-size: 0.8em;
    margin-left: 0;
    position: initial;
    width: 100%;
  }
`

const Dates = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  font-family: VT323;
  font-size: 2em;
  justify-content: space-between;
  margin-top: 0.25em;
  width: 100%;
  flex-shrink: 0;
`

const Start = styled.div`
`

const End = styled.div`
  align-self: flex-end;
  margin-left: auto;
`

const ScrollIndicator = styled.div`
  color: ${indigo.A100};
  display: none;
  padding-bottom: 2em;
  text-align: center;
  @media (max-width: 1000px) {
    display: block;
  }
`

const RotateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Name = styled.div`
  white-space: nowrap;
  font-family: VT323;
  font-size: 4em;
  margin-bottom: 1rem;
  text-transform: uppercase;
`