import React from 'react'
import styled from 'styled-components'
import {
  grey,
} from '@material-ui/core/colors'

function Appearance({
  date,
  link = '#',
  location,
  title,
}) {
  return (
    <Container>
      <Date>
        {location || date}
      </Date>
      <Title
        href={link}
        target="_blank"
      >
        {title}
      </Title>
    </Container>
  )
}

export default Appearance

const Container = styled.div`
  color: #000;
  font-family: PT Sans;
  margin-top: 2em;
`

const Date = styled.div`
  font-size: 0.9em;
  opacity: 0.8;
  text-transform: uppercase;
`

const Title = styled.a`
  display: block;
  color: ${grey.A400}
`
