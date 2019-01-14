import React from 'react';
import Brand from '../Brand/Brand';
import PropTypes from 'prop-types';

class Tyre extends React.Component {
    render() {
        return (
            <div className="tyre">
                <h2>{this.props.data.name}</h2>
                <Brand data={this.props.data.brand} />
                <div dangerouslySetInnerHTML={{__html: this.props.data.description}}></div>
            </div>
        )
    }

} 
Tyre.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string
      })
}

export default Tyre;