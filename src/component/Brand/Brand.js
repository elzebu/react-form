import React from 'react';
import PropTypes from 'prop-types';

import {
    withRouter
  } from 'react-router-dom'

class Brand extends React.Component {

    render () {
        return (
            <>
                <h3><img src={this.props.data.src} alt="" height="50" /> {this.props.data.name}</h3>
                <button onClick={() => { this.props.click() }}>Supprimer</button>
                <button onClick={() => { this.props.history.push(`/brands/${this.props.data.id}/edit`)}}>Modifier</button>
            </>
        )
    }
}

Brand.propTypes = {
    data: PropTypes.shape({
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}

export default withRouter(Brand);