import React from 'react'

const DetailOrder = ({idBuy, purchaseDate}) => {
  return (
    <div>
        <h3>Detail order</h3>
        <div>
            <p>
                IdOrder: {idBuy}
            </p>
            <p>
                Purchase Date: {purchaseDate}
            </p>
        </div>
       
    </div>
  )
}

export default DetailOrder