import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetBuyByIdFromUserQuery, useLazyGetBuyByIdFromUserQuery } from '../state/store/service/BuyService';
import DetailOrder from '../components/OrderDetail/DetailOrder';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme'
import TableOrderDetail from '../components/OrderDetail/TableOrderDetail';
const OrderDetailStyled=styled.div`
  background-color:${(props)=>props.theme.colors.fondo};
  height:100vh; 
  width:auto;
  font-family:${props=>props.theme.fonts.raleway};
`
const OrderDetail = () => {

  const params=useParams()
  const [Buy, setBuy] = useState({});

  const {
    data, isError, isSuccess, isLoading, error
  }=useGetBuyByIdFromUserQuery(params.id)

  useEffect(() => {
    if(isSuccess){
      setBuy(data)
    }
  }, [isSuccess]);

  return isSuccess&&(
    <ThemeProvider theme={theme}>
      <OrderDetailStyled>
        <DetailOrder idBuy={data?.id} purchaseDate={data?.createdAt}/>
        <TableOrderDetail order={data}/>
      </OrderDetailStyled>
    </ThemeProvider>
  )
}

export default OrderDetail