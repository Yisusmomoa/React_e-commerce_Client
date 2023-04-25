import React from 'react'
import { DropdownCategoryStyled } from './DropdownCategory.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme';
import { useGetAllCategoriesQuery } from '../../state/store/service/CategoryService';

const DropdownCategory = () => {
  const {data, isError, isLoading, isSuccess}=useGetAllCategoriesQuery()
  return (
    <ThemeProvider theme={theme}>
      <DropdownCategoryStyled>
        {
          data?.results.map(categ=>(
            <option value={categ.id} key={categ.id}>{categ.name}</option>
          ))
        }

      </DropdownCategoryStyled>
    </ThemeProvider>
  )
}

export default DropdownCategory