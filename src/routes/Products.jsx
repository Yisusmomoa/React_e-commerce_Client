import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { ProductsContainer} from '../components/Products/Products.style'
import ListProducts from '../components/Products/ListProducts';
import AsideProducts from '../components/Products/AsideProducts/AsideProducts';
import SubNavbarProducts from '../components/Products/SubNavbarProducts';
import { useModal } from '../state/hooks/useModal';
import Modal from '../components/IsAdmin.jsx/Modal/Modal';
import Pagination from '@mui/material/Pagination';
import { useGetPaginationProductsQuery } from '../state/store/service/ProductService';

const Products = () => {
  //#region Services
    const [size, setSize] = useState(8);
    const [page, setPage] = useState(0);
    const {data, isLoading, 
      isSuccess, 
      isError, error}=useGetPaginationProductsQuery({size, page})
    const [
      isOpenOptions,
      openModalOptions,
      closeModalOptions
    ]=useModal()
  //#endregion Services
  let countPag=Number.parseInt(data?.count/(size)+1);

  useEffect(() => {
    if(data){
        countPag=data?.count
    }
  }, [isLoading]);
  
  return isSuccess&&(
    <ThemeProvider theme={theme}>
      <SubNavbarProducts showModal={openModalOptions}/>

      <ProductsContainer>
        <AsideProducts/>
        <ListProducts products={data?.products}/>
      </ProductsContainer>
        <Pagination count={countPag} 
          style={{display:'flex', justifyContent: 'center'}}
          size='large'
          onChange={(ev, page)=>{setPage(page-1)}}/>
        
      <Modal isOpen={isOpenOptions} closeModal={closeModalOptions}>
        <h1>Options</h1>
      </Modal>
    </ThemeProvider>
  )
}

export default Products