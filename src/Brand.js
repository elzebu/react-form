import React from 'react';

const Brand = (props) => (
    <div className="brand row">
        <div className="col">
            <h3><img src={props.data.src} alt="" height="50" /> {props.data.name}</h3>
        </div>
        <div className="col text-right">
            {props.click ?
                <button onClick={props.click}>supprimer</button>
                : null
            }
        </div>
    </div>
)

export default Brand;