import React from 'react'   
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckoutCard from './CheckoutCard';
import { Total } from './Total';
import { useStateValue } from '../StateProvider';

const CheckoutPage = () => {

    const [{ basket }, dispatch]=useStateValue();
    
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h3><i>Apunto de recibir lo Mejor del Diseño ...</i> </h3>
                    <Typography align='center' gutterBottom variant='h4'>
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    {basket?.map((item) => (
                        <Grid item xs={12} sm={8} md={6} key={item.id}>
                            <CheckoutCard key={item.id} product={item} />
                        </Grid>
                    ))}
                </Grid >
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CheckoutPage