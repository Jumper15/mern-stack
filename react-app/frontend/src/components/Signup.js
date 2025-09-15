import * as React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function Signup() {
     return (
          <div>
               <div>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" /><Button variant="outlined">Outlined</Button>
               </div>
               <div>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" /><Button variant="outlined">Outlined</Button>
               </div>
               <div><Button variant="outlined">Outlined</Button></div>
          </div>
     )
}