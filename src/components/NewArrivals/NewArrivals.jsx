import React from 'react'
import { NewArrivalsStyled } from './NewArrival.styled'
import Carousel from './Carousel/Carousel '
import Ofertas from './Ofertas/Ofertas'

const NewArrivals = () => {
  return (
    <NewArrivalsStyled>
        <Carousel/>
        <Ofertas/>
    </NewArrivalsStyled>
  )
}

export default NewArrivals