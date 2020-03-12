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
            <li>Installer react redux</li>
            <li>Créer un répertoire redux</li>
            <li>Dedans créer 4 fichiers : actionTypes.js, actions.js, reducers.js et store.js</li>
            <li>Dans actionTypes,  définir une constante SWITCH_THEME qui à pour valeur 'SWITCH_THEME'</li>
            <li>Dans action.js,
              <ul>
              <li>importer les type d'actions : <pre>import * as type from './actionTypes'</pre></li>
              <li>définir une action (fonction) switchTheme qui renvoi un objet type: type.SWITCH_THEME</li>
            </ul>
            </li>
            <li>
            dans le reducer, créer une nouvelle function :
            <pre>
            {`
              export const theme = (state, action) => {
                switch (action.type) {
                  case type.SWITCH_THEME:
                      return {
                        ...state,
                        theme: state.theme === 'black' ? 'white' : 'black'
                      }
                  default:
                      return state
                }
              }
              `}
              </pre>
            </li>
            <li>
              Dans le fichier store.js creer le store
              <pre>
                {`
                import { createStore } from 'redux'
                import * as reducers from './reducers'

                const initialState = {
                  theme: 'white'
                }

                const store = createStore(reducers.counter, initialState)

                export default store
                `}
              </pre>
            </li>
            <li>
              Dans le fichier index.js rajouter :
              <pre>
              {`
              import { Provider } from 'react-redux'
              import store from './redux/store'

              ...

              <Provider store={store}><App /></Provider>
              `}
              </pre>
            </li>
            <li>
              Dans le fichier Header.js, on va se connecter au store et afficher le theme en cours.
              <pre>
                {`
                import {connect} from 'react-redux'

                const mapStateToProps = (state) => {
                      return {
                          theme : state.theme
                      }
                  }

                  export default connect(mapStateToProps)(Header)
                  `}
                => Maintenant j'ai dans les props de mon objet la propriété theme que je peux afficher
              </pre>
            </li>
            <li>
              Dans le fichier que vous souhaitez, on va maintenant mettre en place l'action de changer la valeur du theme.
              <pre>
                {`
                import {connect} from 'react-redux';
                import * as type from '../../redux/actionTypes';

                const mapDispatchToProps = dispatch => {
                    return {
                      switchTheme: () => dispatch({type: type.SWITCH_THEME}) // ou utiliser l’action creator dispatch(updateCounter()) 
                    }
                }

                export default connect(null, mapDispatchToProps)(Brands) // mettre le nom du composant que vous pluggez
                `}
              </pre>
              => Il est maintenant possible utiliser la fonction 'switchTheme' sur un click d'un bouton par exemple
            </li>
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
