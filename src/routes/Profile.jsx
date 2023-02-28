import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBarLink } from '../components/Navbar/NavBar.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { ButtonLogout, ProfileContainer, Profile_Aside, Profile_Link } from '../components/Profile/Profile.style'
import Captura from '../assets/Captura.jpg';

// icons
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

// como contenedor aquí ira el sidebar
const Profile = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProfileContainer>

        <Profile_Aside>
          <img src={Captura} width={'150px'} height={'150px'} />
          <Profile_Link  to={'/profile/'}><PersonOutlineOutlinedIcon fontSize='large'/> Profile</Profile_Link>
          <Profile_Link to={'/profile/wishlist'}> <BookmarkBorderOutlinedIcon fontSize='large'/> Wishlist</Profile_Link>
          <Profile_Link to={'/profile/myorders'}><LocalMallOutlinedIcon fontSize='large'/> My orders</Profile_Link>
          <Profile_Link to={'/admin'}> <AdminPanelSettingsOutlinedIcon fontSize='large'/> Admin</Profile_Link>
          <ButtonLogout>Logout</ButtonLogout>
        </Profile_Aside>

        <Outlet/>
      </ProfileContainer>
    </ThemeProvider>
  )
}

export default Profile