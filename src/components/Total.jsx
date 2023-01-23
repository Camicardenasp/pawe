import React from 'react'
import accounting from "accounting";
import { Button } from '@mui/material';
import { useStateValue } from '../StateProvider';
import {getBasketTotal} from '../reducer'

export const Total = () => {
    
    const [{ basket }, dispatch]=useStateValue();
    
    return (
        <div>
            <h5>Productos Totales: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), "$", 0)}</h5>
            <Button variant='contained' color='secondary'>Check Out</Button>
        </div>
    )
}
