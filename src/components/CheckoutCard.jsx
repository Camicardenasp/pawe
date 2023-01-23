import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import accounting from "accounting";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

export default function CheckoutCard({ product: { id, name, image, price, description } }) {
    
    const [{ basket }, dispatch]=useStateValue();

    // const removeItem = () => {
    //     dispatch({
    //         type: actionTypes.REMOVE_ITEM,
    //         id: id,
    //     })
    // }


    return (
        <Card sx={{ minWidth: 300 }} key={id}>
            <CardHeader
                title={name}
                subheader="Disponible"
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Bolso Lorax"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography>
                    {accounting.formatMoney(price, "$", 0)}
                </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart fontSize='large' />
                </IconButton>
                <IconButton>
                    <RemoveShoppingCartIcon fontSize='large' />
                </IconButton>
                <IconButton>
                    <DeleteIcon fontSize="large"  />
                </IconButton>
            </CardActions>
             */}
        </Card>
    );
}
