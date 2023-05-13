import styled from "styled-components";
import { device, deviceMin } from "../../styles/breakpoints";
import { Link } from 'react-router-dom'

export const WishlistContainer=styled.div`
  width:70%;
  height:50vh;
  overflow-y: auto;
`

export const WishlistCard=styled.div`
  width:auto;
  height:200px;
  border:1px solid blue;
  margin-top:0.5rem;
  margin-bottom:0.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  display:grid;
  grid-template-rows: auto;
  grid-template-columns:30% 70%;
  align-items: center;
  justify-items: center;

`
export const WishlistImgCard=styled.img`
  width:70%;
  object-fit: fill;
  height:150px;
  border:1px solid black;
  border-radius:3px;
`

export const WishlistInfoContainer=styled.div`
  width:100%;
  height:100%;
  display:grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, auto);

`
export const WishlistLinkProduct=styled(Link)`
  text-decoration: none;

`

export const WishlistPrice=styled.div`
  width:auto;
  height:auto;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  gap:100px;
  button{
    margin:0;
  }
`

export const WishlistInfoProduct=styled.div`
  width:auto;
  height:auto;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  h4{
    color:red;
    cursor:pointer;
  }
`






