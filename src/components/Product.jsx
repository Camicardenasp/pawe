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
import {actionTypes} from '../reducer';
import {useStateValue} from '../StateProvider';

export default function Product({ product: { id, name, image, price, description } }) {
    
const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                id: id,
                name: name,
                image: image,
                price: price,
                description: description,
            }
        })
    }
    
    
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
            <CardActions disableSpacing>
                <IconButton aria-label='Add to Cart' onClick={addToBasket}>
                    <AddShoppingCart fontSize='large'/>
                </IconButton>
                {/* <IconButton>
                    <RemoveShoppingCartIcon fontSize='large' />
                </IconButton> */}
            </CardActions>
        </Card>
    );
}
