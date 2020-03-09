import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Brand from '../Brand/Brand'

function Brands({ brands, click }) {

    const [displayBrand, setDisplayBrand] = useState(false)
    
    const list = brands.map(brand => (
        <Brand data={brand} key={brand.id} click={() => click(brand.id)} />
    ));
    return (
        <>
        <button onClick={() => setDisplayBrand(!displayBrand)}>
            {!displayBrand ?'Afficher': 'Masquer'} les marques
        </button>
          {displayBrand ?
            <>
                <h2>Liste des marques</h2>
                {list}
            </>
            : null }
        </>
    )
}

Brands.propTypes = {
    brands: PropTypes.array.isRequired,
    click: PropTypes.func.isRequired
}

export default Brands;
