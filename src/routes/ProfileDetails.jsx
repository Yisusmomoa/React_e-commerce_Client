import React from 'react'
import Form from '../components/Form/Form'
import { ButtonDeletAccount, ButtonForm, DangerZone_Container, DeleteAccount_Container, FormStyled, InputForm, ProfileDetails_Container } from '../components/Profile/ProfileDetails.style'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import HttpsIcon from '@mui/icons-material/Https';
import { ContainerInput } from '../components/Form/Form.style';
// aquí iran los inputs para actualizar los datos, logout, delete account
const ProfileDetails = () => {
  // username, email, password
  return (
    <ProfileDetails_Container>
      <FormStyled>
        <ContainerInput>
            <PersonOutlineOutlinedIcon fontSize='large'/>
            <InputForm type='text' 
                placeholder='Username'/>
          </ContainerInput>

          <ContainerInput>
              <AlternateEmailOutlinedIcon fontSize='large'/>
              <InputForm type='email' 
                  placeholder='Your email'/>
          </ContainerInput>

          <ContainerInput>
              <HttpsOutlinedIcon fontSize='large'/>
              <InputForm type='password' 
                  placeholder='Password'/>
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
          <ButtonDeletAccount>Delete this account</ButtonDeletAccount>
        </DeleteAccount_Container>
      </DangerZone_Container>

    </ProfileDetails_Container>
  )
}

export default ProfileDetails