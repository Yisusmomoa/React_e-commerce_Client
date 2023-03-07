import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import { Modal_InputStyled } from '../../Modal/Modal.style'
import ButtonAddModal from '../../Modal/ButtonAddModal'
import { useUpdateUserAdminMutation } from '../../../../state/store/service/UserService'
import Swal from 'sweetalert2'

const UpdateUser = ({isOpenModalUpdate, closeModalUpdate, data}) => {

    //Services
    const [updateUser, {isLoading, isSuccess,
        isError, error}]=useUpdateUserAdminMutation()
    //services
    const [rol, setRol]=useState(1)
    const [rolTxt, setRolTxt]=useState("")
    // const [infoUser, setInfoUser]=useState("")
    
    const [username, setusername]=useState("")
    const [password, setpassword]=useState("")
    const [email, setemail]=useState("")

    // const handleOnChange=(ev)=>{
    //     setInfoUser({
    //         ...infoUser,
    //         [ev.target.name]:ev.target.value
    //     })
    //     console.log(infoUser)
    // }
    const handleOnChangeUsername=(ev)=>{
        setusername(ev.target.value)
    }
    const handleOnChangePassword=(ev)=>{
        setpassword(ev.target.value)
    }
    const handleOnChangeEmail=(ev)=>{
        setemail(ev.target.value)
    }
    useEffect(() => {
        setusername(data?.username)
        // setpassword(data.password)
        setemail(data?.email)
        return ()=>{
            setusername('')
            setemail('')
        }
    }, [data]);

    const handleSubmit=(ev)=>{
        ev.preventDefault();
        console.log(rol)
        updateUser({
            id:data?.id,
            rolId:rol
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
            }).then(()=>closeModalUpdate())
        }
        else if(isError){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error?.data.message,
            })
        }
      }, [isLoading]);
    return (
        <Modal isOpen={isOpenModalUpdate} 
            closeModal={closeModalUpdate}>
            <h4>Edit User</h4>
            <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="username">Username: </label>
                <Modal_InputStyled type='text' name='username' 
                    value={username || ''} onChange={handleOnChangeUsername} />
            </p>
            <p>
                <label htmlFor="password">Password: </label>
                <Modal_InputStyled type='text' name='password'
                     onChange={handleOnChangePassword} 
                     value={password ||''}/>
            </p>
            <p>
                <label htmlFor="email">Email: </label>
                <Modal_InputStyled type='email' name='email'
                     value={email || ''} onChange={handleOnChangeEmail}/>
            </p>
            <p>
                <label>
                    Rol 
                    <select value={rol} onChange={(ev)=>setRol(ev.target.value)}>
                    <option value="1">Admin</option>
                    <option value="3">Normal</option>
                    </select>
                </label>
            </p>

            <ButtonAddModal/>
            </form>
        </Modal>
    )
}

export default UpdateUser