import React from 'react'
import ReactRotatingText from 'react-rotating-text'
import styled, {
  keyframes,
} from 'styled-components'

function Rotate() {
  const items = [
    "Developer",
    "Leader",
    "Innovative",
    "Passionate",
  ]
  return (
    <RotateText
      items={items}
    />
  )
}

export default Rotate

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const RotateText = styled(ReactRotatingText)`
  font-size: 25px;
  font-weight: bold;
  .react-rotating-text-cursor {
    padding-left: 1px;
    animation: ${blink} 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
  }
`
