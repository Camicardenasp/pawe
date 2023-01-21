import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Banner() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/Home.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Bienvenidos
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pawe es un emprendimiento colombiano, ideado por la diseñadora Mariana Jiménez, quién después de estudiar Producción Escénica y Visual en LaSalle College Institute de Bogotá, decidió plasmar su creatividad y talento en la elaboración de Bolsos y accesorios hechos a la medida con inspiración de algunas películas, y momentos trascendentales de la producción escénica en los cuales  la materialidad, los colores y las texturas son lo personajes principales en la creación de bolsos y carteras con un toque de originalidad que distinguen la identidad de la marca.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Ver Productos
                </Button>
            </CardActions>
        </Card>
    );
}
