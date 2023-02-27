import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchContainer=styled.div`
    display:flex;
    width:auto;
    height:auto;
    align-items: center;
`

const InputSearchStyled=styled.input`
    border:1px solid ${(props)=>props.theme.colors.Letras};
    border-radius:5px;
    padding: 5px 20px;
    margin: 8px 0;
    display: inline-block;
    box-sizing: border-box;
    font-size:16px;
    font-family:${props=>props.theme.fonts.raleway};
`
const AdminInputSearch = ({search}) => {
  return (
    <div>
        <SearchContainer>
        <InputSearchStyled type='text' placeholder='search...' 
          onChange={(ev)=>search(ev.target.value)} />
        <SearchOutlinedIcon fontSize='medium'/>
      </SearchContainer>
    </div>
  )
}

export default AdminInputSearch