import React from 'react'
import { LogoStyled } from './Logo.style'
import Logo1 from '../../assets/Logo1.png'
const Logo = ({src, width, height}) => {
  return (
    <LogoStyled src={src} width={width} height={height}>
    </LogoStyled>
  )
}

export default Logo