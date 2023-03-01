import styled from '@emotion/styled'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'

const InputPriceFilter=styled.input`
    border-radius:5px;
    width:50%;
    height:30px;
    margin: 4px 0;
    display: inline-block;
    box-sizing: border-box;
    font-size:16px;
`
const PriceFilter = ({setPrice}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <InputPriceFilter type='number' onChange={(ev)=>setPrice(ev.target.value)}/>

      </>
    </ThemeProvider>
  )
}

export default PriceFilter