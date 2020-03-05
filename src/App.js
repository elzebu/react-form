import React, { useState, useEffect } from 'react';

import './App.css';
import { data } from './data'
import Brand from './Brand'
import Tyre from './Tyre'

import axios from 'axios'

function App() {

  const [brands, setBrands] = useState([])
  const [tyres, setTyres] = useState([])
  const [filter, setFilter] = useState('')
  const [displayBrand, setDisplayBrand] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseBrand = await axios.get('/api/brands')
        setBrands(responseBrand.data)

        const responseTyre = await axios.get('/api/tyres')
        setTyres(responseTyre.data)

      } catch (error) {
        setError(true)
      }
    }
    fetchData()
  }, [])


  const handleBrandClick = (id) => {
    const newBrands = [...brands];
    // check if brand is deletable
    if (!data.tyres.find(tyre => tyre.brandId === id)) {
      const indexToRemove = newBrands.findIndex(brand => brand.id === id)
      newBrands.splice(indexToRemove, 1)
      axios.delete(`/api/brands${id}`)
      setBrands(newBrands)
    } else {
      alert('la marque est reliée à au moins un pneu, elle ne peut pas être supprimée')
    }
  }


  const brandsDOM = brands.map(brand => (
    <Brand data={brand} key={brand.id} click={() => handleBrandClick(brand.id)} />
  ));

  const tyresDOM = tyres
    .filter(tyre => tyre.name.toLowerCase().includes(filter.toLowerCase()))
    .map(tyre => {
      const brand = brands.find(brand => brand.id === tyre.brandId)
      tyre.brand = brand ? brand : null;
      return tyre;
    })
    .map(tyreWithBrand => {
      return <Tyre data={tyreWithBrand} key={tyreWithBrand.id} />
    });


  return (
    <div className="App">
      <div className="alert alert-primary">
        <h1>But de l'exercice :</h1>
        <ol>
          <li>Rajouter les prop-type sur Brand et sur Tyre</li>
        </ol>
      </div>
      {error ? <div className="alert">Une erreur est survenue...</div> : null}
      <div className="row">
        <div className="col">
          <button onClick={() => setDisplayBrand(!displayBrand)}>Afficher les marques</button>
          {displayBrand ?
            <div className="bg-light border p-3">
              <h2>Liste des marques</h2>
              {brandsDOM}
            </div>
            : null
          }
        </div>
        <div className="col">
          <div className="bg-light border p-3">
            <h2>Liste des pneus</h2>
            <input type="text" className="w-100" placeholder="rechercher" onChange={(evt) => setFilter(evt.target.value)} />
            {tyresDOM}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
