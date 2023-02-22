import React from 'react'
import { InputSearchStyled, SearchContainer } from './InputSearch.style'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const InputSearch = () => {
  return (
    <ThemeProvider theme={theme}>
      <SearchContainer>
        <InputSearchStyled type='text'/>
        <SearchOutlinedIcon fontSize='medium'/>
      </SearchContainer>
    </ThemeProvider>
  )
}

export default InputSearch