import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { switchTheme } from '../../redux/actions'

import Brand from '../Brand/Brand'

function Brands({ brands, click, switchTheme }) {

    const [displayBrand, setDisplayBrand] = useState(false)
    const list = brands.map(brand => (
        <Brand data={brand} key={brand.id} click={() => click(brand.id)} />
    ));
    return (
        <>
        <button onClick={() => setDisplayBrand(!displayBrand)}>
            {!displayBrand ?'Afficher': 'Masquer'} les marques
        </button>
        <button onClick={() => switchTheme()}>switch theme</button>
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
    click: PropTypes.func
}

const mapDispatchToProps = dispatch => {
    return {
        switchTheme: () => { dispatch(switchTheme()) }
    }
}

export default connect(null, mapDispatchToProps)(Brands)
