import React from 'react';
import Tyre from '../../component/Tyre/Tyre';
import axios from 'axios';

class Tyres extends React.PureComponent {

  state = {
    filter: '',
    tyres: [],
    error: false
  }

  componentDidMount() {
    axios.get('/api/tyres')
            .then(response => {
                const tyres = response.data;
               this.setState({tyres: tyres});
            })
            .catch(error => {
               this.setState({error: true})
            });
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  render () {
    const tyres = this.state.tyres
      .filter(tyre => tyre.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      .map(tyre => {
        return <Tyre name={tyre.name} id={tyre.id} key={tyre.id} />
      });
    return (
      <>
        <h2>Liste des pneus</h2>
        <input type="text" onChange={this.handleFilterChange} />
        <div className="tyresList">
        {
          tyres.length > 0 ?
          tyres
          : <div className="error">Pas de résultat</div>
        }
        </div>
      </>
    );
  }
}

export default Tyres;
