import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function BrandDetail() {
    const [brand, setBrand] = useState()
    const [error, setError] = useState()

    let { id } = useParams()

    useEffect(
        () => {
            axios.get(`/api/brands/${id}`)
            .then(brandResponse => {
                let brand = brandResponse.data
                setBrand(brand)
            })
            .catch(error => {
                setError(true)
            });
        }
    , [id])

    return (
        <div>
            {error ? <div> Une erreur est survenue </div>: null}
            {brand ?
                <div className="tyre">
                    <h2>{brand.name}</h2>
                    <img src={brand.src} alt="" />
                </div>
            : null}
        </div>
    )
}

export default BrandDetail;