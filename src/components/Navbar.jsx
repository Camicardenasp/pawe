import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';
import Pawe from '../assets/BlancoPawe.svg'
import {createTheme } from '@mui/system';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src={Pawe} alt="" />
                    </Typography>
                    <IconButton aria-label="cart">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon color="primary"/>
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <ShoppingCartCheckoutIcon color="secondary"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}