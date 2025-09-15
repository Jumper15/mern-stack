import * as React from 'react';
import Button from '@mui/material/Button'
import Table from './Table'

export default function Homepage() {
     return (
          <div>
               <div>
                    <h1>Header</h1>
               </div>
               <div>
                    <Table></Table>
               </div>
               <div>
                    <Button>Log Out</Button>
               </div>
          </div>
     )
}