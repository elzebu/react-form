import React, { useState, useEffect, useRef } from 'react';

import './App.css';
import { data } from './data'
import Brands from './components/Brands/Brands'
import Tyres from './components/Tyres/Tyres'
import Modal from './Modal';

import axios from 'axios'

import useOnClickOutside from './hooks/useOnClickOutside'

function App() {

  const [brands, setBrands] = useState([])
  const [tyres, setTyres] = useState([])
  const [error, setError] = useState(false)
  const [deleteError, setDeleteError] = useState(false)

  const ref = useRef()

  useOnClickOutside(ref, () => (deleteError) ? setDeleteError(false): null)

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
      setDeleteError(true)
    }
  }

  return (
    <div className="App">
      <div className="alert alert-primary">
        <h1>But de l'exercice :</h1>
        <ol>
          <li>Créer un custom Hook qui gère le click hors de la zone cible (pour fermer la popin)</li>
        </ol>
      </div>
      {deleteError ?
        <Modal>
          <div  ref={ref} className="content alert alert-danger">
            La marque est relié à au moins un pneu, elle ne peut être supprimée.
            </div>
        </Modal>
        :
        null
      }
      {error ? <div className="alert">Une erreur est survenue...</div> : null}
      <div className="row">
        <div className="col">
          <div className="bg-light border p-3">
            <Brands brands={brands} click={handleBrandClick} />
          </div>
        </div>
        <div className="col">
          <div className="bg-light border p-3">
            <Tyres brands={brands} tyres={tyres} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
