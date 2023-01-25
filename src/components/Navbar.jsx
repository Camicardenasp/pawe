import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';
import Pawe from '../assets/BlancoPawe.svg'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useStateValue } from '../StateProvider';

const pages=[
    {
        id: '1',
        name: 'Inicio',
        url: '/',
    },
    {
        id: '2',
        name: 'Productos',
        url: '/products',
    },
    {
        id: '3',
        name: 'Carrito de Compras',
        url: "/checkout-page",
    },
    {
        id: '4',
        name: 'Finalizar Compra',
        url: '/checkout',
    },
    // {
    //     id: "5",
    //     name: 'Sobre Nosotros',
    //     url: '/about',
    // },
];

export default function ButtonAppBar() {
    const [anchorElNav, setAnchorElNav]=React.useState(null);

    const handleOpenNavMenu=(event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu=() => {
        setAnchorElNav(null);
    };

    const [{ basket }, dispatch]=useStateValue();
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ backgroundColor: "#242424" }}>
                <Toolbar style={{ display: "flex", justifyContent: "space-around", width: "100%" }} >

                    {/* <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                    >
                        {pages.map((page) => (
                            <Link to={page.url}>
                                <MenuItem key={page.id} onClick={handleCloseNavMenu} style={{ color: "white", backgroundColor: "#242424" }}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            </Link>
                        ))}
                    </Menu> */}

                    <Link to="/">
                        <Typography>
                            <HomeIcon style={{ color: "grey" }} />
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
                                <ShoppingCartIcon style={{ color: "grey" }} />
                            </Badge>
                        </IconButton>
                    </Link>

                    {/* <Link to="/checkout">
                        <IconButton>
                            <ShoppingCartCheckoutIcon style={{ color: "grey", paddingRight: "30px" }} />
                        </IconButton>
                    </Link> */}

                </Toolbar>
            </AppBar>
        </Box>
    );
}