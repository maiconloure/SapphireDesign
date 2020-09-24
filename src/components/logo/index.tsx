import * as React from 'react'
import styled from 'styled-components'

interface LogoProps {
  image: any
}

const Logo = ({ image }: LogoProps) => {
  return <LogoImg src={image} alt='logo-image' />
}

export default Logo

const LogoImg = styled.img`
  width: 200px;
  box-shadow: 1px 1px 16px #2d2d2d;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`
