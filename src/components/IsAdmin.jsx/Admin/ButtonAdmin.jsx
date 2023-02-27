import React from 'react'
import styled from "styled-components";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ButtonAdminStyle=styled.button`
    color:${(props)=>props.theme.colors.Letras2};
    background-color:${(props)=>{
            return props.typeBtn==='Delete'?
            props.theme.colors.Delete
            :props.theme.colors.Btn_Hover
        }
    };
    cursor:pointer;
    border:none;
    border-radius:4px;
    padding: 12px 50px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    transition: background-color 0.3s ease-in;
    &:hover{
        background-color:${(props)=>{
            return props.typeBtn==='Delete'?
            props.theme.colors.DeleteHover
            :props.theme.colors.Btn_Reposo
            }
        };
    }
`
const getIconFromName=(iconName)=>{
    switch (iconName) {
        case "Edit":
            return <EditOutlinedIcon 
                fontSize='small'/>
        case "Delete":
            return <DeleteOutlineOutlinedIcon 
                fontSize='small'/>
        default:
            break;
    }
}
const ButtonAdmin = ({title, typeBtn, iconName, action, id}) => {
    const icon=getIconFromName(iconName)
  return (
    <ButtonAdminStyle typeBtn={typeBtn}
    onClick={()=>action(id)}>{icon}{title}</ButtonAdminStyle>
  )
}

export default ButtonAdmin