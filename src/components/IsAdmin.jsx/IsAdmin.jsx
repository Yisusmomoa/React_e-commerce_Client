import React from 'react'
import { Outlet } from 'react-router-dom'

const IsAdmin = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default IsAdmin