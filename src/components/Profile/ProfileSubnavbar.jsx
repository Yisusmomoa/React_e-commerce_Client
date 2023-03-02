import React from 'react'
// icons
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Captura from '../../assets/Captura.jpg';
import { Profile_Link, Profile_SubNavbar, SubNavBar_InfoUser, SubNavBar_Links } from './Profile.style';

const ProfileSubnavbar = () => {
  return (
    <Profile_SubNavbar>
          <SubNavBar_InfoUser>
            <img src={Captura} width={'150px'} height={'150px'} />
            <h3>Username sub</h3>
          </SubNavBar_InfoUser>
          <SubNavBar_Links>
            <Profile_Link to={'/profile/'}><PersonOutlineOutlinedIcon fontSize='large'/></Profile_Link>
            <Profile_Link to={'/profile/wishlist'}> <BookmarkBorderOutlinedIcon fontSize='large'/></Profile_Link>
            <Profile_Link to={'/profile/myorders'}><LocalMallOutlinedIcon fontSize='large'/></Profile_Link>
            <Profile_Link to={'/admin'}> <AdminPanelSettingsOutlinedIcon fontSize='large'/></Profile_Link>
            <Profile_Link><LogoutOutlinedIcon fontSize='large' color='red'/></Profile_Link>
          </SubNavBar_Links>
    </Profile_SubNavbar>
  )
}

export default ProfileSubnavbar