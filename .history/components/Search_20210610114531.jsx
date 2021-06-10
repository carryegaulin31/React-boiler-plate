import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
border-radius: 8px;
font-size: 16px;
padding: 5px;
margin: 20px 0;
outline: none;
background-color: white ;
placeholder
`

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ term, setter }) => (
  <Input type="text" name="search" type="text" placeholder="Search for parts here" value={term} onChange={event => setter(event.target.value)} />
)
