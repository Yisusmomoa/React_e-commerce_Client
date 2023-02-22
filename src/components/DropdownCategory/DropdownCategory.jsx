import React from 'react'
import { DropdownCategoryStyled } from './DropdownCategory.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'

const DropdownCategory = () => {
  return (
    <ThemeProvider theme={theme}>
      <DropdownCategoryStyled>
          <option value="fruit">Fruit</option>

          <option value="vegetable">Vegetable</option>

          <option value="meat">Meat</option>
      </DropdownCategoryStyled>
    </ThemeProvider>
  )
}

export default DropdownCategory