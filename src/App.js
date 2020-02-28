import React, { useState } from 'react';

import './App.css';
import { data } from './data'
import Brand from './Brand'
import Tyre from './Tyre'

function App() {

  const [brands, setBrands] = useState(data.brands)
  const [tyres] = useState(data.tyres)
  const [filter, setFilter] = useState('')

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
          <li>créer un composant Marque qui a comme propriété
              <ul>
              <li>Un Nom</li>
              <li>Un lien vers une image</li>
            </ul>
          </li>
          <li>
            Créer un composant pneu qui a comme propriété
              <ul>
              <li>Un nom</li>
              <li>Une marque (id de la marque)</li>
              <li>Une description (avec du contenu HTML)</li>
            </ul>
          </li>
          <li>Dans le fichier App.js créer un tableau contenant la liste des marques et un tableau contenant la liste des pneus, et les afficher</li>
          <li>Rajouter un champ input qui permet de filtrer les pneus (sur le champ nom)</li>
          <li>Supprimer une marque au clic sur celle-ci (si elle n'est pas utiliser par un pneu)</li>
        </ol>
      </div>

      <div class="row">
        <div class="col">
          <div className="bg-light border p-3">
            <h2>Liste des marques</h2>
            {brandsDOM}
          </div>
        </div>
        <div class="col">
          <div className="bg-light border p-3">
            <h2>Liste des pneus</h2>
            <input type="text" class="w-100" placeholder="rechercher" onChange={(evt) => setFilter(evt.target.value)} />
            {tyresDOM}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
