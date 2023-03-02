import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { ProductsContainer} from '../components/Products/Products.style'
import ListProducts from '../components/Products/ListProducts';
import AsideProducts from '../components/Products/AsideProducts/AsideProducts';
import SubNavbarProducts from '../components/Products/SubNavbarProducts';
import { useModal } from '../state/hooks/useModal';
import Modal from '../components/IsAdmin.jsx/Modal/Modal';

const Products = () => {
  const [
    isOpenOptions,
    openModalOptions,
    closeModalOptions
  ]=useModal()
  return (
    <ThemeProvider theme={theme}>
      <SubNavbarProducts showModal={openModalOptions}/>
      <ProductsContainer>
        <AsideProducts/>
        <ListProducts/>
      </ProductsContainer>
      <Modal isOpen={isOpenOptions} closeModal={closeModalOptions}>
        <h1>Options</h1>
      </Modal>
    </ThemeProvider>
  )
}

export default Products