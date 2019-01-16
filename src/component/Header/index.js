import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
    <header>
        <Link to="/">Home</Link>
        <Link to="/tyres">Pneu</Link>
        <Link to="/brands">Marque</Link>

        <span>counter : {props.counter}</span>
    </header>
    )

}

const mapStateToProps = (state) => {
    return {
        counter : state.count
    }
}

export default connect(mapStateToProps)(Header);