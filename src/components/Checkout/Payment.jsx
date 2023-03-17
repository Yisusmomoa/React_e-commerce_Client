import React from 'react'
import { Card_Expire_CCV_Container, PaymentContainer, Payment_Card, Payment_Form, Payment_Header, Payment_PayPal } from './Payment.style'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import logoPaypal from '../../assets/logoPaypal.png'
import Visa from '../../assets/tarjetas/Visa.png'
import Mastercard from '../../assets/tarjetas/Mastercard.png'

const Payment = () => {
  return (
    <div>
      <h2>
        Payment
        <CreditCardOutlinedIcon/>
      </h2>
      <PaymentContainer>

        <Payment_Header>

          <Payment_PayPal>
            <div>
              <input type="radio" id="paypal" name="payment" value="Paypal"/>
              <label for="paypal">Paypal</label>
            </div>
            <img src={logoPaypal} />
          </Payment_PayPal>

          <Payment_Card>
            <div>
              <input type="radio" id="Card" name="payment" value="Card" />
              <label for="Card">Debit/Credit Card</label>
            </div>
           <div>
              <img src={Visa} />
              <img src={Mastercard} />
           </div>
          </Payment_Card>

        </Payment_Header>

        <Payment_Form>
          <div>
            <label>
            Name on card
              <input type="text" id="NameCard" 
                name="NameCard" placeholder='Name on card' />
            </label>
          </div>
          <div>
            <label>Card number
              <input type="text" id="NumberCard" 
                name="NumberCard" placeholder='Card number' />
            </label>
          </div>

          <Card_Expire_CCV_Container>

            <div>
              <label> Expiry
                <input type="text" id="ExpiryCard" 
                  name="ExpiryCard" placeholder='MM / YYYY' />
              </label>
            </div>
            
            <div>
              <label>CVC/CVV
                <input type="text" id="CVC/CVVCard" 
                  name="CVC/CVVCard" placeholder='123' />
              </label>
            </div>
           
          </Card_Expire_CCV_Container>
        </Payment_Form>

      </PaymentContainer>

    </div>
  )
}

export default Payment