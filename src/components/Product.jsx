import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'

import accounting from "accounting";;

import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Lorax from '../assets/Lorax.png'



const ExpandMore=styled((props) => {
    const { expand, ...other }=props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand? 'rotate(0deg)':'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Product() {
    const [expanded, setExpanded]=React.useState(false);

    const handleExpandClick=() => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ minWidth: 300 }}>
            <CardHeader
                action={
                    <Typography>
                        {accounting.formatMoney(200000,"$",0)}
                    </Typography>
                }
                title="Lorax"
                subheader="Disponible"
            />
            <CardMedia
                component="img"
                height="194"
                image={Lorax}
                alt="Bolso Lorax"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Bolso de Pompones
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart fontSize='large' />
                </IconButton>
                <IconButton>
                    <RemoveShoppingCartIcon fontSize='large' />
                </IconButton>
            </CardActions>
        </Card>
    );
}
