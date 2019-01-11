import React, { Component } from 'react';
import Brand from './Brand';
import Tyre from './Tyre';
import './App.css';

class App extends Component {

  state = {
    filter: '',
    brands: [
      {
        id: 1,
        src: 'https://www.logodesignlove.com/images/classic/michelin-man-running.jpg',
        name: 'michelin'
      },
      {
        id: 2,
        src: 'https://www.bridgestoneamericas.com/content/dam/bscorpcomm-sites/bridgestone-americas/images/brand-assets/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
        name: 'bridgestone'
      },
      {
        id: 3,
        src: 'https://cdn.freebiesupply.com/logos/large/2x/goodyear-racing-logo-png-transparent.png',
        name: 'goodyear'
      }
    ],
    tyres: [
      {
        id: 1,
        name: 'Energy saver +',
        brandId: 1,
        description: `
        <h3>Points forts</h3>
        <ul>
          <li>Economie de carburant</li>
          <li>Très bonne longévité</li>
          <li>Excellente adhérence sur sol sec et mouillé</li>
        </ul>`
      },
      {
        id: 2,
        name: 'Primacy 4',
        brandId: 1,
        description: `
        <h3>Points forts</h3>
        <ul>
          <li>En toute sécurité neuf comme usé</li>
          <li>Excellente longévité</li>
          <li>Très hautes performances de freinage sur sol mouillé</li>
        </ul>`
      },
      {
        id: 3,
        name: 'CrossClimate +',
        brandId: 1,
        description: `
        <h3>Points forts</h3>
        <ul>
          <li>Armez-vous face aux aléas climatiques, jusqu'au dernier kilomètre</li>
          <li>Et avec MICHELIN Total performance, plus de performances réunies</li>
        </ul>`
      },
      {
        id: 4,
        name: 'Weather control A005',
        brandId: 2,
        description: `
        <h3>Points forts</h3>
        <ul>
          <li>Maîtrisez votre route, en toutes saisons</li>
          <li>Certifié pour l'usage sur la neige (marquage 3PMSF)</li>
          <li>Kilométrage au-delà des attentes du consommateur</li>
        </ul>`
      }
    ]
  }
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  handleBrandClick = (id) => {
    const brands = [...this.state.brands];
    // check if brand is deletable
    if (!this.state.tyres.find(tyre => tyre.brandId === id)) {
      const indexToRemove = brands.findIndex(brand => brand.id === id);
      brands.splice(indexToRemove, 1);
      this.setState({
        brands
      })
    } else {
      alert('la marque est reliée à au moins un pneu, elle ne peut pas être supprimée')
    }
  }

  render () {
    const brands = this.state.brands.map(brand => (
      <Brand data={brand} key={brand.id} click={() => this.handleBrandClick(brand.id)} />
    ));

    const tyres = this.state.tyres
      .filter(tyre => tyre.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      .map(tyre => {
        const brand = this.state.brands.find(brand => brand.id === tyre.brandId);
        tyre.brand = brand ? brand : '';
        return tyre;
      })
      .map(tyreWithBrand => {
        return <Tyre data={tyreWithBrand} key={tyreWithBrand.id} />
      });
    return (
      <div className="App">
        <div className="intro">
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
            <li>Dans le fichier App.js créer un tableau contenant la liste des marque et un tableau content la liste des pneus, et les afficher</li>
            <li>Rajouter un champ input qui permet de filtrer les pneus (sur le champ nom)</li>
            <li>Supprimer une marque au clic sur celle-ci (si elle n'est pas utiliser par un pneu)</li>
          </ol>
        </div>
        <h2> Liste des marques</h2>
        {brands}
        <h2> Liste des pneus</h2>
        <input type="text" onChange={this.handleFilterChange} />
        {tyres}
      </div>
    );
  }
}

export default App;
