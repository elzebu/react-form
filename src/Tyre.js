import React from 'react'
import Brand from './Brand'

import PropTypes from 'prop-types'

const Tyre = (props) => {
    return (
        <div className="tyre border-bottom p-2">
            <h2>test {props.data.name}</h2>
            <Brand data={props.data.brand} />
            <div dangerouslySetInnerHTML={{ __html: props.data.description }}></div>
        </div>
    )
}

Tyre.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string
    })
}

export default Tyre