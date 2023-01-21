import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'

const Root = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default Root;