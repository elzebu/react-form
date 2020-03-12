import React, { useEffect, useState } from 'react';
import Brand from '../Brand/Brand';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function TyreDetail() {
    const [tyre, setTyre] = useState()
    const [error, setError] = useState()

    let { id } = useParams()

    useEffect(
        () => {
            axios.get(`/api/tyres/${id}`)
            .then(tyreResponse => {
                let tyre = tyreResponse.data
                axios.get(`/api/brands/${tyre.brandId}`).then(
                    brandResponse => {
                        const brand = brandResponse.data
                        tyre.brand = brand
                        setTyre(tyre)
                    }
                )
            })
            .catch(error => {
                setError(true)
            });
        }
    , [id])

    return (
        <div>
            {error ? <div> Une erreur est survenue </div>: null}
            {tyre ?
                <div className="tyre">
                    <h2>{tyre.name}</h2>
                    {tyre.brand ?
                        <Brand data={tyre.brand} />
                        : null
                    }
                    <div dangerouslySetInnerHTML={{ __html: tyre.description }}></div>
                    <Link to={`/tyre/${id}/edit`}>Modifier</Link>
                </div>
            : null}
        </div>
    )
}

export default TyreDetail;