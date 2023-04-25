import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import ProductBody from '../components/ProductBody/ProductBody'
import { useParams } from 'react-router-dom'

const ProductStyled=styled.div`
 background-color:${(props)=>props.theme.colors.fondo};
  height:auto;
  width:auto;
  font-family:${props=>props.theme.fonts.raleway};
  text-align:center;
`
const Product = () => {
  const params=useParams()
  const [idProd, setidProd] = useState(params.id);
  // console.log(idProd)
  return (
    <ThemeProvider theme={theme}>
      <ProductStyled>
        <ProductBody idProd={idProd}/>
      </ProductStyled>
    </ThemeProvider>
  )
}

export default Product