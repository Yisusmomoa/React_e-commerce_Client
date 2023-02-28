import React from 'react'

const PriceFilter = ({setPrice}) => {
  return (
    <>
        <input type='number' onChange={(ev)=>setPrice(ev.target.value)}/>
    </>
  )
}

export default PriceFilter