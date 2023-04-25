import React from 'react'
import { ListOfContainer } from './ListOf.style'
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

const ListOf = ({info, title, select}) => {
  return (
    <ListOfContainer>
            {
                info?.map(element=>(
                    <label key={element.id}><input type="radio" onClick={()=>select(element?.id)}
                name={title} value={element?.id}/>{element?.name}</label>
                ))
            }   
            
    </ListOfContainer>
  )
}

export default ListOf




/*
<ListOfContainer>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
            <RadioGroup
                name="radio-buttons-group">
                    {
                        info?.map(element=>(
                            <FormControlLabel key={element?.id} 
                                onClick={()=>select(element?.id)}
                                value={element?.id} control={<Radio />}
                                label={element?.name} />
                        ))
                    }
            </RadioGroup>
        </FormControl>
    </ListOfContainer>

*/

/*
<FormGroup>
            {
                info.map(element=>(
                    <div key={element.id}>
                        <FormControlLabel 
                            control={<Checkbox onClick={()=>select(element.id)}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} 
                            label={element.name} />
                    </div>
                ))
            }
        </FormGroup>

*/