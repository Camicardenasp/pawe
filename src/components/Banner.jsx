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
                        <b><i>Pawe</i></b> es un emprendimiento colombiano, ideado por la diseñadora <b>Mariana Jiménez</b>, 
                        quién después de estudiar Producción Escénica y Visual en LaSalle College Institute de Bogotá, 
                        decidió plasmar su <b>creatividad y talento</b> en la elaboración de Bolsos y accesorios 
                        hechos a la medida. 
                        <br></br>
                        <br></br>
                        Todos los productos cuentan con <i>inspiración de películas, y momentos trascendentales de la producción escénica </i>
                        en los cuales  <b>la materialidad, los colores y las texturas son lo personajes principales</b> en la creación de bolsos 
                        y carteras con el toque de originalidad que distinguen la identidad de la marca. Dale click para continuar.
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary" p>
                    Ver Productos
                </Button>
            </CardActions> */}
        </Card>
    );
}
