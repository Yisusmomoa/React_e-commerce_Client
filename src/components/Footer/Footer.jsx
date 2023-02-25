import React from 'react'
import { FooterContainer, Footer_About, Footer_BuyContainer, 
  Footer_Envio, Footer_Envio_Imgs, Footer_HelpContact,
  Footer_Tarjetas, Footer_TarjetasYEnvio, 
  Footer_TarjetasYEnvio_Tarjetas, NavBarLink } from './Footer.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'

// assets_images
import Tarjetas1 from '../../assets/tarjetas/Tarjetas1.png'
import Tarjetas2 from '../../assets/tarjetas/Tarjetas2.png'
import dhl from '../../assets/tarjetas/dhl.png'
import estafeta2 from '../../assets/tarjetas/estafeta2.png'

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <FooterContainer>

        <Footer_BuyContainer>
          <h3>Buy</h3>
          <NavBarLink to={'/signIn'}>Registration</NavBarLink>
          <NavBarLink to={'/products'}>Store</NavBarLink>
        </Footer_BuyContainer>

        <Footer_HelpContact>
          <h3>Help & Contact</h3>
          <NavBarLink to={'/#'}>Seller information center</NavBarLink>
          <NavBarLink to={'/#'}>Contact Us</NavBarLink>
        </Footer_HelpContact>

        <Footer_About>
          <h3>About Tech zone</h3>
          <NavBarLink to={'/#'}>Company info</NavBarLink>
          <NavBarLink to={'/#'}>News</NavBarLink>
          <NavBarLink to={'/#'}>Polices</NavBarLink>
        </Footer_About>

        <Footer_TarjetasYEnvio>
          <Footer_Tarjetas>
            <Footer_TarjetasYEnvio_Tarjetas src={Tarjetas1}/>
            <Footer_TarjetasYEnvio_Tarjetas src={Tarjetas2}/>
          </Footer_Tarjetas>
          <Footer_Envio>
            <Footer_Envio_Imgs src={estafeta2}/>
            <Footer_Envio_Imgs src={dhl}/>
          </Footer_Envio>
        </Footer_TarjetasYEnvio>

      </FooterContainer>
      
    </ThemeProvider>
  )
}

export default Footer