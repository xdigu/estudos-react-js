import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from './../../services/api';

import './styles.css';

export default class Product extends Component {
    state = {
        product: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params,
            response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    };


    render() {
        const { product } = this.state,
            url = product.url;

        return (
            <div className="product">
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>URL: <a rel="noreferrer" href={url} >{url}</a></p>
                </div>
                <div className="action">
                    <p>
                        <Link to={'/products'}> Voltar </Link>
                    </p>
                </div>
            </div>
        );
    }
}
