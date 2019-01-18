import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


class BrandEdit extends React.Component {

    state = {
        brand: {
            name: '',
            src: ''
        },
        updated: false
    }

    handleChange = (key, value) => {
        const brand = { ...this.state.brand };
        brand[key] = value;
        this.setState({
            brand
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/brands/${this.props.match.params.id}`, this.state.brand)
            .then(response => {
                let brand = response.data;
                this.setState({
                    brand,
                    updated: true
                });
                console.log(this.props);
                this.props.update();
                this.props.updateCounter();
            })
            .catch(error => {
                this.setState({ error: true });
            });;
    }

    componentDidMount () {
        axios.get(`/api/brands/${this.props.match.params.id}`)
            .then(response => {
                let brand = response.data;
                this.setState({ brand });
            })

            .catch(error => {
                this.setState({ error: true });
            });
    }

    render () {
        return (
            <div className="tyre-edit">
                {this.state.updated ?
                    'Mise à jour réussi'
                    : null
                }
                {this.state.error ?
                    'erreur à la mise à jour'
                    : null
                }
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" value={this.state.brand.name} onChange={(e) => this.handleChange('name', e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="src">Image url</label>
                        <input type="text" id="src" value={this.state.brand.src} onChange={(e) => this.handleChange('src', e.target.value)} />
                    </p>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        )
    }
}

export default withRouter(BrandEdit);