import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
display: block;
  margin-left: 10%;
  margin-right: 80%;
  width: 20px;
  border-top: 50px;
  border-bottom: 50px;
`
export default () => (

  <Img src="../public/logo.png" alt="logo" />
)
