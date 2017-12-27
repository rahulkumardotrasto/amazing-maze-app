import React from 'react'
import styled from 'styled-components'
import {media} from '../utils/media'

export const Header = styled.main`
text-align: centre;
font-size: 2em;
font-familt: 'Roboto', sans-serif; 
`


export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 80%;
  min-height: 80vh;
${media.handheld`
    width: 100%;
  `}
`

export const Main = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}


