import React from 'react'
import PropTypes from 'prop-types'

import Brand from '../Brand/Brand'

const Tyre = (props) => {
    return (
        <div className="tyre border-bottom p-2">
            <h2>{props.data.name}</h2>
            <Brand data={props.data.brand} />
            <div dangerouslySetInnerHTML={{ __html: props.data.description }}></div>
        </div>
    )
}

Tyre.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        brand:  PropTypes.object
    })
}

export default Tyre