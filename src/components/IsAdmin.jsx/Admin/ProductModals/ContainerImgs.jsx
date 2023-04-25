import React from 'react'
import styled from 'styled-components'
import RowProductUpdate from './RowProductUpdate'

const ContainerImgsStyled=styled.div`
    width:100%;
    height:100%;
    display:flex;
    
`
const ContainerImgs = ({imgsProd, deleteImg, updateImg}) => {
  return (
    <ContainerImgsStyled>
        {
            imgsProd?.map(img=>(
                <RowProductUpdate key={img.id} 
                    img={img} deleteImg={deleteImg}
                    updateImg={updateImg}/>
            ))
        }
    </ContainerImgsStyled>
  )
}

export default ContainerImgs