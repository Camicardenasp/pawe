import React from 'react'
import accounting from "accounting";
import { Button } from '@mui/material';

export const Total = () => {
    return (
        <div>
            <h5>Productos Totales: 3</h5>
            <h5>{accounting.formatMoney(200000, "$", 0)}</h5>
            <Button variant='contained' color='secondary'>Check Out</Button>
        </div>
    )
}
