import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'

const Root = () => {
    return (
        <>
            <Navbar/>
            <div style={{ paddingTop: 60 }}>
                <Outlet />
            </div>
        </>
    )
}

export default Root;