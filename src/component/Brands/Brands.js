import React from 'react';
import Brand from '../../component/Brand/Brand';

class Brands extends React.PureComponent {

  render () {
    const brands = this.props.brands.map(brand => (
      <Brand data={brand} key={brand.id} click={() => {
        console.log('test'); this.props.click(brand.id)
      } } />
    ));

    return (
      <div className="brands">
        <h2>Liste des marques</h2>
        {brands}
      </div>
    );
  }
}

export default Brands;
