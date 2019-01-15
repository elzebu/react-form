import React from 'react';
import Brand from '../Brand/Brand';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Tyre extends React.Component {

    state = {
        tyre: {},
        error: false
    }

    componentDidMount () {
        axios.get(`/api/tyres/${this.props.match.params.id}`)
            .then(tyreResponse => {
                let tyre = tyreResponse.data;
                axios.get(`/api/brands/${tyre.brandId}`).then(
                    brandResponse => {
                        const brand = brandResponse.data;
                        tyre.brand = brand;
                        this.setState({ tyre });
                    }
                )
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

    render () {
        return (
            <div className="tyre">
                <h2>{this.state.tyre.name}</h2>
                {this.state.tyre.brand ?
                    <Brand data={this.state.tyre.brand} />
                    : null
                }
                <div dangerouslySetInnerHTML={{ __html: this.state.tyre.description }}></div>
                <Link to={`${this.props.match.url}/edit`}>Modifier</Link>
            </div>
        )
    }

}
Tyre.propTypes = {
    id: PropTypes.number,
}

export default Tyre;