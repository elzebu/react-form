import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <ul className="nav nav-pills mb-3">
                <li className="nav-item">
                    <NavLink className="nav-link" exact={true} activeClassName='active' to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact={true} activeClassName='active' to='/tyres'>Pneu</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact={true} activeClassName="active" to="/brands">Marque</NavLink>
                </li>
            </ul>
        </header>
    )
}