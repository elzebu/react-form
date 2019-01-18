import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchBrands } from '../../redux/actions';

import Modal from '../../Modal';

class Brand extends React.Component {

    state = {
        errorBrandDelete: false
    }

    handleClick = () => {

        // check if brand is deletable
        if (!this.props.tyres.find(tyre => tyre.brandId === this.props.data.id)) {
            axios.delete(`/api/brands/${this.props.data.id}`).then(
                response => this.props.fetchBrands()
            )
        } else {
            this.setState({ errorBrandDelete: true })
        }
    }

    render () {
        return (
            <>
                <h3><img src={this.props.data.src} alt="" height="50" /> {this.props.data.name}</h3>
                <button onClick={this.handleClick}>Supprimer</button>
                <button onClick={() => { this.props.history.push(`/brands/${this.props.data.id}/edit`) }}>Modifier</button>

                {this.state.errorBrandDelete ?
                    <Modal>
                        <div className="overlay"></div>
                        <div className="content" onClick={() => this.setState({ errorBrandDelete: false })}>
                            La marque est reliée à au moins un pneu, elle ne peut être supprimée.
              </div>
                    </Modal>
                    :
                    null
                }
            </>
        )
    }
}

Brand.propTypes = {
    data: PropTypes.shape({
        tyres: PropTypes.array.isRequired,
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBrands : () => dispatch(fetchBrands())
    }
}
export default connect(null, mapDispatchToProps)(withRouter(Brand));