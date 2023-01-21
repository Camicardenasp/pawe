import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Banner from './Banner'
import Pawe from '../assets/BlancoPawe.svg'

export default function Home() {
    return (
        <div>
            <h1><img src={Pawe} alt="" /></h1>
            <Link to="/products">
                <Grid container spacing={2}>
                        <Banner />
                </Grid>
                
            </Link>
            
        </div>
    )
}
