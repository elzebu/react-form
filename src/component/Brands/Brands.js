import React from 'react';
import Brand from '../../component/Brand/Brand';

class Brands extends React.PureComponent {

  render () {
    const brands = this.props.brands.map(brand => (
      <Brand data={brand} key={brand.id} click={() => this.props.click(brand.id)} />
    ));

    return (
      <div className="brands">
        <h2 onClick={() => console.log('list')}>Liste des marques</h2>
        {brands.length > 0 ? brands : 'Aucune marque disponible'}
      </div>
    );
  }
}

export default Brands;
