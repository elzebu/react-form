import React, { useState } from 'react';

import './App.css';
import { data } from './data'
import Brand from './Brand'
import Tyre from './Tyre'

function App() {

  const [brands, setBrands] = useState(data.brands)
  const [tyres] = useState(data.tyres)
  const [filter, setFilter] = useState('')
  const [displayBrand, setDisplayBrand] = useState(false)

  const handleBrandClick = (id) => {
    const newBrands = [...brands];
    // check if brand is deletable
    if (!data.tyres.find(tyre => tyre.brandId === id)) {
      const indexToRemove = newBrands.findIndex(brand => brand.id === id);
      newBrands.splice(indexToRemove, 1);
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
          <li>Masquer par défaut la liste des marques</li>
          <li>Rajouter un bouton qui permet d'afficher / masquer la liste des marques</li>
          <li>Transformer le composant marque en class, et lui rajouter les fonctions du cycle de vie (avec un console.log)</li>
        </ol>
      </div>

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
