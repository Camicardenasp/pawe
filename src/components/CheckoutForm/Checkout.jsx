import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useStateValue } from '/src/StateProvider';
import { getBasketTotal } from "/src/reducer";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import accounting from "accounting";

const theme=createTheme();

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://pawe.netlify.app">
                Pawe Handmade Bags
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Checkout() {

    const [{ basket }, dispatch]=useStateValue();
    const total=getBasketTotal(basket);

    const mensaje=`Hola, me gustaría solicitar la siguiente orden a domicilio.
    *----------------------------------------*
    *Productos:*
    ${basket.map(item =>
    `
    *----------------------------------------*
    *Producto:* ${item.name}
    *Precio:* ${item.price}
    *Descripción:* ${item.description}
    `
    )}
    *----------------------------------------*
    *VALOR TOTAL DE LA ORDEN:* $ ${total} `

    const url=`https://api.whatsapp.com/send?phone=573013990324&text=${encodeURIComponent(mensaje)}`;

    window.open(url);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Resumen de la Orden
                    </Typography>
                    <List disablePadding>
                        {basket.map((item) => (
                            <ListItem key={item.name} sx={{ py: 1, px: 0 }}>
                                <ListItemText primary={item.name} secondary={item.desc} />
                                <Typography variant="body2">{accounting.formatMoney(item.price, "$", 0)}</Typography>
                            </ListItem>
                        ))}
                        <ListItem sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="Total" />
                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                {accounting.formatMoney(getBasketTotal(basket), "$", 0)}
                            </Typography>
                        </ListItem>
                    </List>
                    <Typography variant="subtitle1">
                        Te hemos redirigido a WhatsApp con los datos de tu orden 
                        para que pidas por este medio con tu nombre y tu dirección 
                        los productos que seleccionaste. ¡Gracias por tu compra!
                    </Typography>
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}