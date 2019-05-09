import React, { Component } from 'react';

import './styles.css'

import api from './../../services/api'

export default class Main extends Component {
    state = {
        products: [],
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        this.setState({ products: response.data.docs })
        console.log(response);
    };

    render() {
        const { products } = this.state;

        return (
            <div>
                <div className="products-list">
                    <div>
                        {products.map(product => (
                            <article key={product._id}>
                                <strong>{product.title}</strong>
                                <p>{product.description}</p>

                                <a href=" ">Acessar</a>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};