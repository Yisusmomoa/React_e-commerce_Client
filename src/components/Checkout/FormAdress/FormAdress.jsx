import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { AddressContainer, CityContainer,
   CountryContainer,
   FormAdressContainer, StateContainer, ZipCodeContainer } from './FormAdress.style';

const FormAdress = () => {
  return (
    <div>
      <h2>
        Shipping details
        <LocalShippingOutlinedIcon fontSize='large'/>
      </h2>
      <FormAdressContainer>
        <CityContainer>
          <input type="text" id="City" 
            name="City" placeholder='City' />
        </CityContainer>
        <ZipCodeContainer>
          <input type="text" id="zipCode" 
            name="zipCode" placeholder='Zip code' />
        </ZipCodeContainer>
        <AddressContainer>
          <input type="text" id="address" 
            name="address" placeholder='Address' />
        </AddressContainer>
        <StateContainer>
          <input type="text" id="state" 
            name="state" placeholder='State' />
        </StateContainer>
        <CountryContainer>
          <input type="text" id="country" 
            name="country" placeholder='Country' />
        </CountryContainer>
      </FormAdressContainer>

    </div>
  )
}

export default FormAdress