import React from 'react';
import PropTypes from 'prop-types';

class Brand extends React.Component {

    render () {
        return (
            <button onClick={() => { console.log('test on click'); this.props.click()} }><img src={this.props.data.src} alt="" height="50" /> {this.props.data.name}</button>
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