import React from 'react'

import styled from 'styled-components'

const Image = styled.div`

const Page = styled.div`
  margin: 60px auto 0;
  text-align: center;
  width: 100%;
  background-color: blue;
`

export default ({ children }) => (
  <Image />
  <Page>{children}</Page>
)
