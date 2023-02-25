import React from 'react'
import { OfertasContainer, Ofertas_ImgOferta } from './Ofertas.style'
import Banner8 from '../../../assets/carrusel/Banner8.jpg'
import Banner9 from '../../../assets/carrusel/Banner9.jpg'
import Banner10 from '../../../assets/carrusel/Banner10.jpg'

const Ofertas = () => {
  return (
    <OfertasContainer>
        <Ofertas_ImgOferta src={Banner8}/>
        <Ofertas_ImgOferta src={Banner9}/>
        <Ofertas_ImgOferta src={Banner10}/>
    </OfertasContainer>
  )
}

export default Ofertas