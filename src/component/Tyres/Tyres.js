import React from 'react';
import Tyre from '../../component/Tyre/Tyre';

class Tyres extends React.PureComponent {

  state = {
    filter: '',
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  render () {
    const tyres = this.props.tyres
      .filter(tyre => tyre.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      .map(tyre => {
        const brand = this.props.brands.find(brand => brand.id === tyre.brandId);
        tyre.brand = brand ? brand : '';
        return tyre;
      })
      .map(tyreWithBrand => {
        return <Tyre data={tyreWithBrand} key={tyreWithBrand.id} />
      });
    return (
      <>
        <h2>Liste des pneus</h2>
        <input type="text" onChange={this.handleFilterChange} />
        {tyres}
      </>
    );
  }
}

export default Tyres;
