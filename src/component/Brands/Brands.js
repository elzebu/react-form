import React from 'react';
import Brand from '../../component/Brand/Brand';
import { connect } from 'react-redux';
import { fetchBrands } from '../../redux/actions';
import axios from 'axios';

class Brands extends React.PureComponent {

  state = {
    tyres: []
  }

  componentDidMount () {
    // Fetch brands
    this.props.fetchBrands();

    // Fetch Tyres
    axios.get('/api/tyres')
      .then(response => {
        const tyres = response.data;
        this.setState({ tyres: tyres });
      })
      .catch(error => {
        this.setState({ error: true })
      });
  }

  render () {
    let brands = null;
    if(this.props.brands) {
      brands = this.props.brands.map(brand => (
        <Brand data={brand} key={brand.id}  tyres={this.state.tyres}/>
      ));
    }

    return (
      <div className="brands">
        <h2 onClick={() => console.log('list')}>Liste des marques</h2>
        {brands.length > 0 ? brands : 'Aucune marque disponible'}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brands: state.brands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBrands: () => dispatch(fetchBrands())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
