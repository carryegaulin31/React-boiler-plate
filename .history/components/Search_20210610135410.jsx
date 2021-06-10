import React from 'react'
import styled from 'styled-components'

const Input = styled.input` 
border-radius: 8px;
font-size: 16px;
padding: 5px;
margin: 20px 0;
outline: none;
background-color: white ;
`
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ term, setter }) => (
  // eslint-disable-next-line max-len
  <Input type="text" name="search" className="placeholder" style="placeholder="Search for parts here" value={term} onChange={event => setter(event.target.value)} />
)
