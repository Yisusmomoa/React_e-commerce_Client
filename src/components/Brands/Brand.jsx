import React from 'react'
import { BrandCard } from './Brands.style'
import { NavBarLink } from '../Navbar/NavBar.style'

const Brand = ({imgBrand}) => {
  return (
    <NavBarLink to={'/products'}>
        <BrandCard src={imgBrand}/>
    </NavBarLink>
  )
}

export default Brand