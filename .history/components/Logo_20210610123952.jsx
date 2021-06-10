import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
display: block;
  margin-left: 10%;
  margin-right: 80%;
  width: 20px;
  padding-top: 50;
  padding-bottom: .5em;
`
export default () => (

  <Img src="../public/logo.png" alt="logo" />
)
