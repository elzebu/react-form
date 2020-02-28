import React from 'react';

const Brand = (props) => (
    <div className="brand row">
        <div class="col">
            <h3><img src={props.data.src} alt="" height="50" /> {props.data.name}</h3>
        </div>
        <div class="col text-right">
            {props.click ?
                <button onClick={props.click}>supprimer</button>
                : null
            }
        </div>
    </div>
)

export default Brand;