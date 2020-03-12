import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import './App.css';
import { data } from './data'
import Brands from './components/Brands/Brands'
import BrandDetail from './components/BrandDetail/BrandDetail'
import Tyres from './components/Tyres/Tyres'
import TyreDetail from './components/TyreDetail/TyreDetail'
import TyreEdit from './components/TyreEdit/TyreEdit'
import Modal from './Modal'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

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
    <BrowserRouter>
      <div className="App">
        <div className="alert alert-primary">
          <h1>But de l'exercice :</h1>
          <ol>
            <li>Installer react-router</li>
            <li>Créer un composant Home</li>
            <li>Créer un composant Header et déporter les liens dedans</li>
            <li>Créer un composant TyreDetail qui affiche le détail d'un pneu et faire une route vers ce dernier</li>
            <li>Créer un composant TyreEdit qui permet d'editer un pneu et créer une route vers ce dernier</li>
            <li>Faire de même pour les marques</li>
          </ol>
        </div>
        <Header />
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
        <Switch>
          <Route exact path="/" render={() => <Home brands={brands} tyres={tyres} click={handleBrandClick} /> } />
          <Route exact path="/tyres" render={() => <Tyres brands={brands} tyres={tyres} />} />
          <Route exact path="/tyre/:id">
            <TyreDetail />
          </Route>
          <Route exact path="/tyre/:id/edit">
            <TyreEdit />
          </Route>
          <Route exact path="/brands" render={() => <Brands brands={brands} tyres={tyres} click={handleBrandClick} />} />
          <Route exact path="/brand/:id">
            <BrandDetail />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
    
      </div>
    </BrowserRouter>
  );
}

export default App;
