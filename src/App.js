import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Link, Redirect } from 'react-router-dom'
import axios from 'axios';

import Brands from './component/Brands/Brands';
import Tyres from './component/Tyres/Tyres';
import './App.css';
import Modal from './Modal';

class App extends Component {

  state = {
    error: false,
    errorBrandDelete: false,
    brands: [],
    tyres: []
  }

  componentDidMount () {
    // Fetch tyres
    axios.get('/api/tyres')
      .then(response => {
        const tyres = response.data;
        this.setState({ tyres });
      })
      .catch(error => {
        this.setState({ error: true });
      });

    // Fetch Brands
    axios.get('/api/brands')
      .then(response => {
        const brands = response.data;
        this.setState({ brands });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  handleBrandClick = (id) => {
    const brands = [...this.state.brands];
    // check if brand is deletable
    if (!this.state.tyres.find(tyre => tyre.brandId === id)) {
      const indexToRemove = brands.findIndex(brand => brand.id === id);
      brands.splice(indexToRemove, 1);
      axios.delete(`/api/brands/${id}`)
      this.setState({
        brands
      })
    } else {
      this.setState({ errorBrandDelete: true })
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="intro">
            <ul>
              <li>Créer un composant Home</li>
              <li>Créer un composant Header et déporter les liens dedans</li>
              <li>Créer un composant TyreDetail qui affiche le détail d'un pneu et faire une route vers ce dernier</li>
              <li>Créer un composant TyreEdit qui permet d'editer un pneu et créer une route vers ce dernier</li>
              <li>Faire de même pour les marques</li>
            </ul>
          </div>
          <header>
            <Link to="/">Home</Link>
            <Link to="/tyres">Pneu</Link>
            <Link to="/brands">Marque</Link>
          </header>
          {this.state.errorBrandDelete ?
            <Modal>
              <div className="overlay"></div>
              <div className="content" onClick={() => this.setState({ errorBrandDelete: false })}>
                La marque est relié à au moins un pneu, elle ne peut être supprimée.
              </div>
            </Modal>
            :
            null
          }
          <Switch>
            <Route exact path="/" render={() => <div><h1>Hello world !</h1></div>} />
            <Route exact path="/tyres" render={() => <Tyres brands={this.state.brands} tyres={this.state.tyres} />} />
            <Route exact path="/brands" render={() => <Brands brands={this.state.brands} tyres={this.state.tyres} click={this.handleBrandClick} />} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
