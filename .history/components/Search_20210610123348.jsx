import React from 'react'
import styled from 'styled-components'
import styles from '../pub'
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
  <Input type="text" placeholder="Search for parts here" name="search" value={term} onChange={event => setter(event.target.value)} />
)
