import React, { useEffect, useState } from 'react'
import Modal from '../../Modal/Modal'
import { Modal_InputStyled } from '../../Modal/Modal.style'
import ButtonAddModal from '../../Modal/ButtonAddModal'
import { useGetUserByIdQuery } from '../../../../state/store/service/UserService'

const UpdateUser = ({isOpenModalUpdate, closeModalUpdate, data}) => {
    const [rol, setRol]=useState(1)
    const [infoUser, setInfoUser]=useState("")
    
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

    return (
        <Modal isOpen={isOpenModalUpdate} 
            closeModal={closeModalUpdate}>
            <h4>Edit User</h4>
            <form >
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
                    <option value="2">Normal</option>
                    </select>
                </label>
            </p>

            <ButtonAddModal/>
            </form>
        </Modal>
    )
}

export default UpdateUser