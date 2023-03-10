import styled from '@emotion/styled'
import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
const ContainerImgsUpdate=styled.div`
    width:100%; 
    height:200px;
    display:flex;
    position:relative;
`
const Img_RowImgs=styled.img`
    width:130px;
    object-fit:fill;
    height:75%;
    /* margin:0 5px 0 5px; */
    overflow:hidden;
    border:1px solid black;
    border-radius:2px;
   
`

const RowProductUpdate = ({img, deleteImg, updateImg}) => {
  return (
    <ContainerImgsUpdate>
      <div style={{display:'flex' , position:"absolute"}}>
        <CloseOutlinedIcon onClick={()=>deleteImg(img?.id)} sx={{cursor:'pointer'}} color='error'/>
        <UploadFileOutlinedIcon onClick={()=>updateImg(img?.id)}  sx={{cursor:'pointer'}} color='primary' />
      </div>
        <Img_RowImgs src={img?.LinkImg} />
    </ContainerImgsUpdate>
  )
}

export default RowProductUpdate