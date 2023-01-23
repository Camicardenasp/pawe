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
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useStateValue } from '../StateProvider';

export default function ButtonAppBar() {
    
    const [{ basket }, dispatch]=useStateValue();
    
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

                    <Link to="/">
                        <Typography>
                            <HomeIcon color="secondary" />
                        </Typography>
                    </Link>

                    <Link to="/products">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <img src={Pawe} alt="" />
                        </Typography>
                    </Link>
                    
                    <Link to="/checkout-page">
                        <IconButton aria-label="cart">
                            <Badge badgeContent={basket?.length} color="secondary">
                                <ShoppingCartIcon color="primary" />
                            </Badge>
                        </IconButton>
                    </Link>

                    <Link to="/checkout">
                        <IconButton>
                            <ShoppingCartCheckoutIcon color="secondary" />
                        </IconButton>
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}