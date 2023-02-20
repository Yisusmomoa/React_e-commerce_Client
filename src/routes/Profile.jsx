import React from 'react'
import { Outlet } from 'react-router-dom'

// como contenedor aquí ira el sidebar
const Profile = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Profile