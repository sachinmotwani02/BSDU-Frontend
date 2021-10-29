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

            <NavLink className="nav-links" to="/indprogram" style={{ textDecoration: 'none' }} activeClassName="menu_active" exact>
                <h3>Individual Program</h3>
                </NavLink>


                <NavLink className="nav-links" to="/faculty" style={{ textDecoration: 'none' }} activeClassName="menu_active" exact>
                <h3>Faculty</h3>
                </NavLink>  

                <NavLink className="nav-links" to="/indfaculty" style={{ textDecoration: 'none' }} activeClassName="menu_active" exact>
                <h3>Faculty Individual</h3>
                </NavLink> 

                <NavLink className="nav-links" to="/leader" style={{ textDecoration: 'none' }} activeClassName="menu_active" exact>
                <h3>Leaders</h3>
                </NavLink>

                <NavLink className="nav-links" to="/result" style={{ textDecoration: 'none' }} activeClassName="menu_active" exact>
                <h3>Result</h3>
                </NavLink>

        </div>
    )
}

export default SideNav
