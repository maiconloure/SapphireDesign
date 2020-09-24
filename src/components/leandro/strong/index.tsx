import React from 'react'
import styled from 'styled-components'

interface Props {
  children: string
}

export default function Strong({ children }: Props) {
  return <StyledStrong>{children}</StyledStrong>
}

const StyledStrong = styled.strong`
  color: #0500ff;
`
