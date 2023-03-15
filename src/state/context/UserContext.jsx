import React, { createContext, useState } from 'react'

const UserContext=createContext()


const UserProvider = ({children}) => {
    const [user, setuser] = useState({});

    const data={
        user,
        setuser
    }
    
  return (
    <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
  )
}

export {UserProvider}

export default UserContext