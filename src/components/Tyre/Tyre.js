import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import Brand from '../Brand/Brand'

const Tyre = (props) => {
    return (
        <div className="tyre border-bottom p-2">
            <h2><Link to={`/tyre/${props.data.id}`}>{props.data.name}</Link></h2>
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