import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from './Product'
import products from '../productsData'
import { ButtonList } from './ButtonList';
import { useState } from 'react';


const Item=styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode==='dark'? '#1A2027':'#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Products() {

    const data = products;
    const allCategories=[
        'All',
        ...new Set(data.map(article => article.category)),
    ];

    const [categories, setCategories]=useState(allCategories);
    const [articles, setArticles]=useState(data);

    const filterCategory=(category) => {
        if (category==='All') {
            setArticles(data)
            return
        }

        const filteredData=data.filter(article => article.category===category);
        setArticles(filteredData)
    }

    return (
        
        <Box sx={{ flexGrow: 1 }}>
            <ButtonList categories={categories} filterCategory={filterCategory} />
            
            <h3><i>Hechos especialmente para ti ...</i> </h3>
            <Grid container spacing={2}>
                {
                    articles.map(product => (
                        <Grid key={product.id} item xs={12} sm={6} md={6} >
                            <Product key={product.id} product={product}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}