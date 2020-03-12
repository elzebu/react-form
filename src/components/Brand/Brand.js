import React from 'react'

import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Brand extends React.Component {
    constructor(props) {
        super(props)
        // console.log(`[Brand] ${props.data.name} Constructor`)
        this.state = {}
    }

    componentDidMount() {
        // console.log(`[Brand] ${this.props.data.name} Component Did Mount`)
    }

    static getDerivedStateFromProps(props, state) {
        // console.log(`[Brand] ${props.data.name} getDerivedStateFromProps`, props, state)
        return state;
    }

    shouldComponentUpdate() {
        // console.log(`[Brand] ${this.props.data.name} shouldComponentUpdate`)
        return true;
    }

    componentWillUnmount() {
        // console.log(`[Brand] ${this.props.data.name} component will unmount`)

    }

    render() {
        return (
            <>
            {this.props.data ?
            <div className="brand row">
                <div className="col">
                    <h3><img src={this.props.data.src} alt="" height="50" /> 
                    <Link to={`/brand/${this.props.data.id}`}>
                        {this.props.data.name}
                    </Link>
                    </h3>
                </div>
                <div className="col text-right">
                    {this.props.click ?
                        <button onClick={this.props.click}>supprimer</button>
                        : null
                    }
                </div>
            </div>
            : null }
            </>
        )
    }
}

Brand.propTypes = {
    data: PropTypes.shape({
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}

export default Brand;