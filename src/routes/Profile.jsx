import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavBarLink } from '../components/Navbar/NavBar.style'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { ButtonLogout, ImgProfile, InputFile, ProfileContainer, ProfilePic, ProfilePicContent, Profile_Aside, Profile_Link } from '../components/Profile/Profile.style'
import Captura from '../assets/Captura.jpg';

// icons
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ProfileSubnavbar from '../components/Profile/ProfileSubnavbar'
import { useLogoutMutation, useMeQuery, useUpdateUserMutation } from '../state/store/service/UserService'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

// como contenedor aquí ira el sidebar
const Profile = () => {
  const { data} = useMeQuery();
  const [logout]=useLogoutMutation();
  const [updateUser, {isLoading, isSuccess,
    isError, error}]=useUpdateUserMutation()
  const handleClickLogout=()=>{
    logout()
    window.location.href = '/home'
  }
  return (
    <ThemeProvider theme={theme}>
      <ProfileContainer>

        <Profile_Aside>
          
          <ProfilePic>
            <ImgProfile src={data?.result.imgProfile}/>
            <ProfilePicContent>
            
              <CameraAltOutlinedIcon color='white'/>
              <span>  
                Edit profile pic
              </span>
                <InputFile type='file' />

            </ProfilePicContent>
          </ProfilePic>

          <h3>{data?.result.username}</h3>
          <Profile_Link  to={'/profile/'}><PersonOutlineOutlinedIcon fontSize='large'/> Profile</Profile_Link>
          <Profile_Link to={'/profile/wishlist'}> <BookmarkBorderOutlinedIcon fontSize='large'/> Wishlist</Profile_Link>
          <Profile_Link to={'/profile/myorders'}><LocalMallOutlinedIcon fontSize='large'/> My orders</Profile_Link>
          {
            data?.result.role==="admin"&&<Profile_Link to={'/admin'}> <AdminPanelSettingsOutlinedIcon fontSize='large'/> Admin</Profile_Link>
          }
          
          <ButtonLogout onClick={handleClickLogout}>Logout</ButtonLogout>

        </Profile_Aside>
        <ProfileSubnavbar/>
        <Outlet/>
      </ProfileContainer>
    </ThemeProvider>
  )
}

export default Profile