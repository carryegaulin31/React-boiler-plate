import React from 'react'

import styled from 'styled-components'

const Title = styled.div`
font-size: 40px;
font-weight: 600;
margin-bottom: 20px;
font-style: italic;
color: white;
`

const Subtitle = styled.div`
font-size: 20px;
color: white;
font-style: italic;
`
export default () => (
  <>
    <Title>
      <span className="create">
        <img src="../logo.png alt="" />
        {' '}
        AeroBase Group, Inc. | AeroBase Group, Inc.
      </span>
    </Title>

    <Subtitle>Parts for your aircraft with the speed you need. National stock number parts distributor.</Subtitle>
  </>
)
