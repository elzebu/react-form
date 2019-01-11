import React from 'react';

const Brand = (props) => (
    <div className="brand" onClick={props.click}>
        <h3><img src={props.data.src} alt="" height="50" /> {props.data.name}</h3>
    </div>
)

export default Brand;