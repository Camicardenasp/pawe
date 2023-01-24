import React from 'react'
import accounting from "accounting";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

export const Total = () => {
    
    const [{ basket }, dispatch]=useStateValue();
    
    return (
        <div>
            <h5>Productos Totales: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket), "$", 0)}</h5>
            <Link to="/checkout">
                <Button variant='contained' color='secondary'>Check Out</Button>
            </Link>
        </div>
    )
}
