import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types'

import Tyre from '../Tyre/Tyre'

function Tyres({ brands, tyres }) {

    const [filter, setFilter] = useState('')
    const inputRef = useRef()
    
    // Set focus on search on first load
    useEffect(() => inputRef.current.focus(), [])

    const tyresDOM = tyres
        .filter(tyre => tyre.name.toLowerCase().includes(filter.toLowerCase()))
        .map(tyre => {
            const brand = brands.find(brand => brand.id === tyre.brandId)
            tyre.brand = brand ? brand : null
            return tyre
        })
        .map(tyreWithBrand => {
            return <Tyre data={tyreWithBrand} key={tyreWithBrand.id} />
        })

    return (
        <>
            <h2>Liste des pneus</h2>
            <input type="text" ref={inputRef} className="w-100" placeholder="rechercher" onChange={(evt) => setFilter(evt.target.value)} />
            {tyresDOM}
        </>
    )
}

Tyres.propTypes = {
    brands: PropTypes.array.isRequired,
    tyres: PropTypes.array.isRequired
}

export default Tyres