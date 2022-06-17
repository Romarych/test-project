import { Box, Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'
const Navbar = () => {
    return (
        <nav>
            <Grid sx={{ color: '#fff', fontSize: 20, background: '#607d9f', height: 60, padding: 2, height: '87vh' }}>
                <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ""}>Users</NavLink>
            </Grid>
        </nav>
    )
}

export default Navbar