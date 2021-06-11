import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const ns = styled.div`
font-size: 20px;
margin-bottom: 10px;
font-style: italic;
color: mediumaquamarine;
`
const Link = styled(NavLink)`
  text-decoration: none;
  color: mediumaquamarine;
`
export default ({ id, name, path }) => (
  <Nsn key={NIIN}>
    <Link to={`/${path}/${NIIN}`}>{`${NAME}` }</Link>
  </Nsn>
)
