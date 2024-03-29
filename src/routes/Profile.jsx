import React, { useRef, useEffect } from 'react'
import { Navigate, NavigationType, Outlet, redirect, useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { ButtonLogout, ImgProfile, InputFile, ProfileContainer,
   ProfilePic, ProfilePicContent, Profile_Aside, Profile_Link } from '../components/Profile/Profile.style'

import Swal from 'sweetalert2';
// icons
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ProfileSubnavbar from '../components/Profile/ProfileSubnavbar'
import { useLazyMeQuery, useLogoutMutation, useMeQuery, useUpdateUserImgMutation, useUpdateUserMutation } from '../state/store/service/UserService'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const Profile = () => {
  const navigate=useNavigate()
  
  const fileInputRef =useRef(null);
  const formRef = useRef(null);
  //#region Services
    const [updateUser, {isLoading, isSuccess,
      isError, error}]=useUpdateUserMutation()

    const [UpdateUserImgMutation, {isLoading:isLoadingImg, isSuccess:isSuccessImg,
      isError:isErrorImg, error:errorImg}]=useUpdateUserImgMutation()

    const { data, isLoading:isLoadingUser} = useMeQuery();
    const [logout, {isLoading:isLoadingLogout, isSuccess:isSuccessLogout}]=useLogoutMutation();
    const [trigger, {data:me, isLoading:isLoadingMe, 
      isUninitialized:isUninitializedMe, isFetching:isFetchingMe}]=useLazyMeQuery()
  //#endregion Services

  const handleClickLogout=async ()=>{
    logout()
    document.cookie="name=token;max-age=0;";  
    document.cookie="name=tuptm;max-age=0;";  
      localStorage.removeItem("cart")
      window.location.href = '/home'
  }
  //#region UpdateImgProfile
    const handleSubmit=(ev)=>{
      ev.preventDefault();
      const formData = new FormData();
      const id=data?.result.id
      const avatar=ev.target.files[0]
      formData.append("avatar", avatar)
      formData.append("id", id);
      UpdateUserImgMutation(formData)
    }

    useEffect(() => {
      if(isLoadingImg){
        Swal.fire({
            title:'Loading',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen:()=>{
                Swal.showLoading()
            }
        })
      }
      if (isSuccessImg) {
          Swal.fire({
              icon: 'success',
              title: 'successfull updated img'
          })
      }
      else if(isErrorImg){
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: errorImg?.data.message,
          })
      }
    }, [isLoadingImg]);
  //#endregion UpdateImgProfile


  return !isLoadingUser && (
    data!=undefined?(
      <ThemeProvider theme={theme}>
      <ProfileContainer>

        <Profile_Aside>
          
          <ProfilePic ref={formRef} onSubmit={(event) => event.preventDefault()} 
           encType="multipart/form-data">
            <ImgProfile src={data?.result.imgProfile}/>
            <ProfilePicContent>
            
              <CameraAltOutlinedIcon color='white'/>
              <label htmlFor="upload-photo" 
                style={{cursor:"pointer"}}>Edit profile pic</label>
              <InputFile type='file'
               name="avatar" 
               id="upload-photo"
               accept="image/png, image/jpeg" 
               ref={fileInputRef} 
               onChange={handleSubmit}/>
            </ProfilePicContent>

          </ProfilePic>

          <h3>{data?.result.username}</h3>
          <Profile_Link  to={'/profile/'}><PersonOutlineOutlinedIcon fontSize='large'/> Profile</Profile_Link>
          <Profile_Link to={'/profile/wishlist'}> <BookmarkBorderOutlinedIcon fontSize='large'/> Wishlist</Profile_Link>
          <Profile_Link to={'/profile/myorders'}><LocalMallOutlinedIcon fontSize='large'/> My orders</Profile_Link>
          {
            data?.result.rolId===1&&<Profile_Link to={'/admin'}> <AdminPanelSettingsOutlinedIcon fontSize='large'/> Admin</Profile_Link>
          }
          
          <ButtonLogout onClick={handleClickLogout}>Logout</ButtonLogout>

        </Profile_Aside>

        <ProfileSubnavbar/>
        
        <Outlet/>
      </ProfileContainer>
      </ThemeProvider>
    )
    :<Navigate to="/" replace={true}  />
  )
}

export default Profile