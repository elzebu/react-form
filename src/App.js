import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchBrands } from './redux/actions';

import Brands from './component/Brands/Brands';
import Tyres from './component/Tyres/Tyres';
import Home from './component/Home';
import Header from './component/Header';
import TyreDetail from './component/TyreDetail';
import TyreEdit from './component/TyreEdit';
import BrandEdit from './component/BrandEdit';

import './App.css';

class App extends Component {

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tyres" component={Tyres} />} />
            <Route exact path="/tyres/detail/:id" component={TyreDetail} />
            <Route exact path="/tyres/detail/:id/edit" component={TyreEdit} />
            <Route exact path="/brands" component={Brands} />
            <Route exact path="/brands/:id/edit" component={BrandEdit} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brands: state.brands,
    tyres: state.tyres
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBrands: () => dispatch(fetchBrands()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
