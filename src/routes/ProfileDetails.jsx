import React, { useEffect } from 'react'
import Form from '../components/Form/Form'
import { ButtonDeletAccount, ButtonForm, DangerZone_Container,
   DeleteAccount_Container, FormStyled, 
   InputForm, ProfileDetails_Container } from '../components/Profile/ProfileDetails.style'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import HttpsIcon from '@mui/icons-material/Https';
import { ContainerInput } from '../components/Form/Form.style';
import { useDesactivateUserMutation, useLogoutMutation, useMeQuery, useUpdateUserMutation } from '../state/store/service/UserService';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

// aquí iran los inputs para actualizar los datos, logout, delete account
const ProfileDetails = () => {
  // username, email, password
  
  //Services
    const [updateUser, {isLoading, isSuccess,
    isError, error}]=useUpdateUserMutation()

    const { data, isLoading:isLoadingData} = useMeQuery();

    const [desactivateUser, {isLoading:isLoadingDesactivate,
    isSuccess:isSuccessDesactivate,
    isError:isErrorDesactivate,
    error:errorDesactivate }]=useDesactivateUserMutation()

    const [logout]=useLogoutMutation();
  //Services

  //Update info user
    const {
      register:update,
      handleSubmit,
      watch, 
      formState:{errors}
    }=useForm()
    const onSubmitUpdate=(user)=>{
      const id=data?.result.id
      const {
        email,
        password,
        username,
        role
      }=user
      updateUser({
        id,
        email,
        username,
        password
      })
    }

    useEffect(() => {
      if(isLoading){
        Swal.fire({
            title:'Loading',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen:()=>{
                Swal.showLoading()
            }
        })
      }
      if (isSuccess) {
          Swal.fire({
              icon: 'success',
              title: 'successfull edit'
          })
      }
      else if(isError){
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error?.data.message,
          })
      }
    }, [isLoading]);
  //Update info user

  //Desactivate account
    const handleDesactivateAccount=()=>{
      const id=data?.result.id
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          desactivateUser(id)
        }
      })
    }

    useEffect(() => {
      if(isLoadingDesactivate){
          Swal.fire({
              title:'Loading',
              allowEscapeKey: false,
              allowOutsideClick: false,
              didOpen:()=>{
                  Swal.showLoading()
              }
          })
      }
      if (isSuccessDesactivate) {
        Swal.fire(
          'Deleted!',
          'Your register has been deleted.',
          'success'
        )
        logout().then(()=>{
          window.location.href = '/home'
        })
      }
      else if(isErrorDesactivate){
          console.log(errorDesactivate)
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: errorDesactivate?.data.message,
          })
      }
    }, [isLoadingDesactivate]);
  //Desactivate account

  return (
    <ProfileDetails_Container>
      <FormStyled onSubmit={handleSubmit(onSubmitUpdate)}>
        <ContainerInput>
            <PersonOutlineOutlinedIcon fontSize='large'/>
            <InputForm type='text' 
                placeholder='Username'
                {...update("username")} />
          </ContainerInput>

          <ContainerInput>
              <AlternateEmailOutlinedIcon fontSize='large'/>
              <InputForm type='email' 
                  placeholder='Your email'
                  {...update("email")}/>
          </ContainerInput>

          <ContainerInput>
              <HttpsOutlinedIcon fontSize='large'/>
              <InputForm type='password' 
                  placeholder='Password'
                {...update("password")}/>
          </ContainerInput>

          <ButtonForm>Save</ButtonForm>
      </FormStyled>

      <DangerZone_Container>
        <h2>Danger zone</h2>
        <DeleteAccount_Container>
          <div>
            <h5>Delete this account</h5>
            <p>Once you delete your account, there is no going back. Please be certain.</p>
          </div>
          <ButtonDeletAccount onClick={handleDesactivateAccount}>Delete this account</ButtonDeletAccount>
        </DeleteAccount_Container>
      </DangerZone_Container>

    </ProfileDetails_Container>
  )
}

export default ProfileDetails