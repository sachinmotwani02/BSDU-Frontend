import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
    return (
        <div className="nav">
            <div className="nav-header">
                <text>space for logo and text</text>
            </div>
            <NavLink className="nav-links" to="/" style={{ textDecoration: 'none' }} activeClassName="menu_active" exact>
                <h3>Dashboard</h3>
            </NavLink>
            <NavLink className="nav-links" to="/school" style={{ textDecoration: 'none' }} activeClassName="menu_active" exact>
                <h3>School</h3>
            </NavLink>

            <NavLink className="nav-links" to="/schoolind" style={{ textDecoration: 'none' }} activeClassName="menu_active" exact>
                <h3>Individual School</h3>
            </NavLink>

            
            <NavLink className="nav-links" to="/programs" style={{ textDecoration: 'none' }} activeClassName="menu_active" exact>
                <h3>Program</h3>
            </NavLink>
            <div className="nav-links">
                <h3>Individual Program</h3>
            </div>
            <div className="nav-links">
                <h3>Faculty</h3>
            </div>   
        </div>
    )
}

export default SideNav
