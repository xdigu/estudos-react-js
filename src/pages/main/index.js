import React, { Component } from 'react';

import './styles.css'

import api from './../../services/api'

export default class Main extends Component {
    state = {
        products: [],
        page: 1,
        productInfo: {}
    };

    // 
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`),
            { docs: products, ...productInfo } = response.data;

        this.setState({ products, productInfo, page });
    };

    nextPage = () => {
        const { page, productInfo } = this.state,
            nextPage = page + 1;

        if (page === productInfo.pages) return;

        this.loadProducts(nextPage);
    };

    prevPage = () => {
        const { page } = this.state,
            nextPage = page - 1;

        if (page === 1) return;

        this.loadProducts(nextPage);
    };


    render() {
        const { products, page, productInfo } = this.state,
            productsPage = productInfo.pages,
            totalProducts = productInfo.total;

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
                    <div className="total-product">
                        <p>Total de produtos: {totalProducts}</p>
                    </div>
                    <div className="actions">
                        <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                        <button disabled={page === productsPage} onClick={this.nextPage}>Próximo</button>
                    </div>
                </div>
            </div>
        );
    }
};