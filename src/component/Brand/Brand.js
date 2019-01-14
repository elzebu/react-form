import React from 'react';
import PropTypes from 'prop-types';

class Brand extends React.Component {

    render () {
        return (
            <React.Fragment onClick={this.props.click}>
                <h3><img src={this.props.data.src} alt="" height="50" /> {this.props.data.name}</h3>
            </React.Fragment>
        )
    }
}

Brand.propTypes = {
    data: PropTypes.shape({
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}

export default Brand;