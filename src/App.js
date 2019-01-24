import React, { Component } from 'react';
import Brands from './component/Brands/Brands';
import Tyres from './component/Tyres/Tyres';
import axios from 'axios';
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
    console.log(id);
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
      <div className="App">
        {this.state.errorBrandDelete ?
          <Modal>
            <div className="overlay"></div>
            <div className="content" onClick={() => this.setState({errorBrandDelete: false})}>
              La marque est relié à au moins un pneu, elle ne peut être supprimée.
          </div>
          </Modal>
          :
          null
        }
        <div className="intro">
          <h1>But de l'exercice :</h1>
          <ol>
            <li>Créer un répertoire "component" et des sous répertoires pour "ranger" nos composants</li>
            <li>Faire deux nouveaux composants : BrandList et TyreList</li>
            <li>reprendre tous les concepts vue jusqu'à maintenant : PureComponent, Fragment, Props-type sur Brand et Tyre, Portal et focus sur le champ de recherche</li>
            <li>Refactoriser le code</li>
          </ol>
        </div>
        <div className="error">{this.state.error ? 'Une erreur est survenue...' : null}</div>
        <Brands 
         brands={this.state.brands}
         click={this.handleBrandClick} />
        <Tyres brands={this.state.brands} tyres={this.state.tyres} />
      </div>
    );
  }
}

export default App;
