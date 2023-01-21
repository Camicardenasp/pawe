import { maxWidth } from '@mui/system'
import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/products">
                <img src="/Home.png" alt=""/>
                <h2>Continua a la Página de Productos</h2>
            </Link>
            
        </div>
    )
}
