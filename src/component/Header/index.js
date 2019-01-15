import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <header>
        <Link to="/">Home</Link>
        <Link to="/tyres">Pneu</Link>
        <Link to="/brands">Marque</Link>
    </header>
    )

}

export default Header;