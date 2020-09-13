import React, {
  useState,
  useEffect,
} from 'react'
import styled, {
  keyframes,
} from 'styled-components'

function Typing() {
  const [
    text,
    setText,
  ] = useState("")
  const [
    cursorDisplay,
    setCursorDisplay,
  ] = useState("inline-block")
  const [
    intervalVar,
    setIntervalVar,
  ] = useState()

  const typewriter = [
    "Developer",
    "Leader",
  ]

  let textNonReact = ''
  let part = 0
  let partIndex = 0
  
  const typeText = () => {
    console.log('typing!')
    let subString = typewriter[part].substring(0, partIndex + 1)
    // setText(subString)
    textNonReact = subString
    partIndex++

    if(subString === typewriter[part]) {
      console.log('here!')
      setCursorDisplay('none')

      clearInterval(intervalVar)
      setTimeout(() => {
        localStorage.clear()
        localStorage.setItem('intervalVar', setInterval(deleteText, 50))
      }, 1000)
    }
  }

  const deleteText = () => {
    let subString = typewriter[part].substring(0, partIndex - 1)
    // setText(subString)
    textNonReact = subString
    partIndex--

    if(subString === '') {
      clearInterval(intervalVar)
      let fullLength = typewriter.length - 1
      if(part === fullLength) {
        part = 0
      } else {
        part++
      }

      partIndex = 0

      setTimeout(() => {
        // setCursorDisplay('inline-block')
        localStorage.clear()
        localStorage.setItem('intervalVar', setInterval(typeText, 100))
      }, 200)
    }
  }

  useEffect(() => {
    localStorage.clear()
    // if(localStorage.getItem('intervalVar')) return
    localStorage.setItem('intervalVar', setInterval(typeText, 100))
  }, [])

  return (
    <Container>
      <Text>
        {text}
      </Text>
      <Cursor
        display={cursorDisplay}
      />
    </Container>
  )
}

export default Typing

const blink = keyframes`
  from, to {
    background-color: transparent
  }
  50% {
    background-color: black;
  }
`

const Container = styled.div`
  text-align: center;
`

const Text = styled.div`
  display: inline-block;
  vertical-align: middle;
  letter-spacing: 2px;
`

const Cursor = styled.div`
  display: ${(p) => p.display};
  vertical-align: middle;
  width: 3px;
  height: 20px;
  animation: ${blink} .75s step-end infinite;
`
