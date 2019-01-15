import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Tyre extends React.Component {
    render () {
        return (
            <div className="tyre">
                <h2><Link to={`/tyres/detail/${this.props.id}`}>{this.props.name}</Link></h2>
            </div>
        )
    }
}
Tyre.propTypes = {
    id: PropTypes.number,
    name:  PropTypes.string
}

export default Tyre;