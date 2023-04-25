import React from 'react'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components'
const HeaderStyled=styled.header`
  /* position: sticky;
  top: 0; */
  height:auto;
`
const Header = () => {
  return (
    <HeaderStyled>
      <Navbar/>
    </HeaderStyled>
  )
}

export default Header