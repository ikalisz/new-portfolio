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

  const linkComponent = link !== "#" ? (
    <Title
      href={link}
      target="_blank"
    >
        {title}
    </Title>
  ) : (
    <NoLink>
      {title}
    </NoLink>
  )
  
  return (
    <Container>
      <Date>
        {location || date}
      </Date>
      {linkComponent}
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
  font-size: 1em;
  opacity: 0.9;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`

const Title = styled.a`
  display: block;
  color: #fff;
`

const NoLink = styled.div`
  display: block;
  font-weight: bold;
  font-size: 1.4em;
  color: #fff;
`
