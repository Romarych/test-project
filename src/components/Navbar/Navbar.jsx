import { Box, Grid } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { compose } from 'redux'
import '../../App.css'
import { getCurrentPage } from '../../redux/users-selector'
const Navbar = (props) => {
    return (
        <nav>
            <Grid sx={{ color: '#fff', fontSize: 20, background: '#607d9f', height: 60, padding: 1, height: '87vh' }}>
                <NavLink to={"/users/" + props.currentPage} className={({ isActive }) => isActive ? 'active' : ""}>Users</NavLink>
            </Grid>
        </nav>
    )
}

let mapStateToProps = (state) => ({
    currentPage: getCurrentPage(state),
})

export default compose(
    connect(mapStateToProps, null),
)(Navbar)
