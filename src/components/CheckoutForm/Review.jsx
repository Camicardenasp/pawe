import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import accounting from "accounting";

const addresses=['Av Carrera 19 No. 160-05', 'Orquídeas'];

export default function Review() {

    const [{ basket }, dispatch]=useStateValue();

    return (
        <React.Fragment>
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
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Dirección de Entrega
                    </Typography>
                    <Typography gutterBottom>Mariana Jiménez</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}