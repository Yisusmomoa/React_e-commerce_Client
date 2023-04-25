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

   //#region filters
   const [priceMin, setPriceMin] = useState(0);
   const [priceMax, setPriceMax] = useState(0);
   const [brand, setBrand]=useState(0);
   const [category, setCategory]=useState(0);

   const selectCategory=(id)=>{
     setCategory(id)
   }
   const selectBrand=(id)=>{
     setBrand(id)
   }

   const setPriceMinHandle=(price)=>{
     setPriceMin(price)
   }
   const setPriceMaxHandle=(price)=>{
     setPriceMax(price)

   }

   
 //#endregion filters

  //#region Services
    const [size, setSize] = useState(8);
    const [page, setPage] = useState(0);
    const {data, isLoading, 
      isSuccess, 
      isError, error}=useGetPaginationProductsQuery({size, page, categoryId:category, brandId:brand, priceMin, priceMax })
    console.log(data)
    
    const [
      isOpenOptions,
      openModalOptions,
      closeModalOptions
    ]=useModal()

    useEffect(() => {
      if(data){
          countPag=data?.count
      }
    }, [isLoading]);
  //#endregion Services
  let countPag=Number.parseInt(data?.count/(size)+1);
  
  return isSuccess&&(
    <ThemeProvider theme={theme}>
      <SubNavbarProducts showModal={openModalOptions}/>

      <ProductsContainer>
        <AsideProducts
        selectCategory={selectCategory}
        selectBrand={selectBrand}
        setPriceMinHandle={setPriceMinHandle}
        setPriceMaxHandle={setPriceMaxHandle}/>
        <ListProducts products={data?.products}/>
      </ProductsContainer>

      <Pagination count={countPag} 
        style={{display:'flex', justifyContent: 'center'}}
        size='large'
        onChange={(ev, page)=>{setPage(page-1)}}  />
          
      <Modal isOpen={isOpenOptions} closeModal={closeModalOptions}>
        <h1>Options</h1>
      </Modal>
    </ThemeProvider>
  )

}

export default Products