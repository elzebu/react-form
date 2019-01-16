import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import axios from 'axios';
import { Helmet } from 'react-helmet';

import Brands from './component/Brands/Brands';
import Tyres from './component/Tyres/Tyres';
import Home from './component/Home';
import Header from './component/Header';
import TyreDetail from './component/TyreDetail';
import TyreEdit from './component/TyreEdit';
import BrandEdit from './component/BrandEdit';

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
    this.handleUpdateTyres();

    // Fetch Brands
    this.handleUpdateBrands();
  }

  handleUpdateBrands = () => {
    console.log('update !!!');
    axios.get('/api/brands')
      .then(response => {
        const brands = response.data;
        this.setState({ brands });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  handleUpdateTyres = () => {
    axios.get('/api/tyres')
      .then(response => {
        const tyres = response.data;
        this.setState({ tyres });
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
          <Helmet titleTemplate="%s | allopneu.com"></Helmet>
          <div className="intro">
            <ul>
              <li>Mettre en place des actions / reducers pour tyres Brands (init, update, delete)</li>
              <li>Deplacer les appel ajax dans les action creator async</li>
              <li>Faire un peu de refacto !</li>
            </ul>
          </div>
          <Header />
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
            <Route exact path="/" component={Home} />
            <Route exact path="/tyres" render={() => <Tyres brands={this.state.brands} tyres={this.state.tyres} />} />
            <Route exact path="/tyres/detail/:id" component={TyreDetail} />
            <Route exact path="/tyres/detail/:id/edit" render={() => <TyreEdit update={this.handleUpdateTyres} />} />
            <Route exact path="/brands" render={() => <Brands brands={this.state.brands} tyres={this.state.tyres} click={this.handleBrandClick} />} />
            <Route exact path="/brands/:id/edit" render={() => <BrandEdit update={this.handleUpdateBrands} />} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
