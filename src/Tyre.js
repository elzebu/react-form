import React from 'react';
import Brand from './Brand';

const Tyre = (props) => {
    return (
        <div className="tyre border-bottom p-2">
            <h2>test {props.data.name}</h2>
            <Brand data={props.data.brand} />
            <div dangerouslySetInnerHTML={{ __html: props.data.description }}></div>
        </div>
    )
}

export default Tyre;