import React from 'react';
import Brand from './Brand';

const Tyre = (props) => (
    <div className="tyre">
        <h2>{props.data.name}</h2>
        <Brand data={props.data.brand} />
        <div dangerouslySetInnerHTML={{__html: props.data.description}}></div>
    </div>
)

export default Tyre;