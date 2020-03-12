import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import './App.css';
import { data } from './data'
import Brands from './components/Brands/Brands'
import Tyres from './components/Tyres/Tyres'
import Modal from './Modal'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

import axios from 'axios'

import useOnClickOutside from './hooks/useOnClickOutside'

const BrandDetail = lazy(() => import('./components/BrandDetail/BrandDetail'))
const TyreDetail = lazy(() => import('./components/TyreDetail/TyreDetail'))
const TyreEdit = lazy(() => import('./components/TyreEdit/TyreEdit'))

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
            <li>Mettre en place le code splitting</li>
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
            <Suspense fallback={<div>Loading...</div>}>
              <TyreDetail />
            </Suspense>
          </Route>
          <Route exact path="/tyre/:id/edit">
            <Suspense fallback={<div>Loading...</div>}>
              <TyreEdit />
            </Suspense>
          </Route>
          <Route exact path="/brands" render={() => <Brands brands={brands} tyres={tyres} click={handleBrandClick} />} />
          <Route exact path="/brand/:id">
            <Suspense fallback={<div>Loading...</div>}>
              <BrandDetail />
            </Suspense>
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
    
      </div>
    </BrowserRouter>
  );
}

export default App;
