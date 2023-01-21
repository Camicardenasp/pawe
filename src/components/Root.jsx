import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'

const Root = () => {
    return (
        <>
            <Navbar/>
            <h3><i>Hechos especialmente para ti ...</i> </h3>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default Root;