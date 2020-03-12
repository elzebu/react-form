import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TyreDetail(props) {
    const [tyre, setTyre] = useState()
    const [brands, setBrands] = useState()
    const [error, setError] = useState()

    let { id } = useParams()

    // Fetch tyre
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

    // fetch brand
    useEffect(() => {
        axios.get('/api/brands')
            .then(response => {
                const brands = response.data;
                setBrands(brands);
            })
            .catch(error => {
                setError(true);
            });
    }, [])


    const handleChange = (key, value) => {
        const NewTyre = { ...tyre }
        NewTyre[key] = value
        setTyre(NewTyre)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const submitTyre = { name: tyre.name, description: tyre.description, brandId: tyre.brandId }
        axios.put(`/api/tyres/${id}`, submitTyre)
            .then(response => {
                let tyre = response.data;
                setTyre(tyre);
            })
    }

    const options = brands && brands.map(brand =>
        <option value={brand.id} key={brand.id}>{brand.name}</option>
    )

    return (
        <div>
            {error ? <div> Une erreur est survenue </div>: null}
            {tyre ?
                <div>
                    <form onSubmit={handleSubmit}>
                        <p>
                            <label htmlFor="name">Nom</label>
                            <input type="text" id="name" value={tyre.name} onChange={(e) => handleChange('name', e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor="brand">Marque</label>
                            <select id="brand" value={tyre.brandId} onChange={(e) => handleChange('brandId', e.target.value)}>
                                <option />
                                {options}
                            </select>
                        </p>
                        <p>
                            <label htmlFor="description">Description</label>
                            <textarea id="description" rows="6" cols="40" onChange={(e) => handleChange('description', e.target.value)} value={tyre.description} />
                        </p>
                        <div>
                            <h2>Preview</h2>
                            <div dangerouslySetInnerHTML={{ __html: tyre.description }}></div>
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
                : null}
        </div>
    )
}

TyreDetail.propTypes = {
    id: PropTypes.number,
}

export default TyreDetail;