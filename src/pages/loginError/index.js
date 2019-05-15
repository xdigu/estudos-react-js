import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

export default class Error extends Component {


    render() {
        return (
            <div className="main">
                <div className="info">
                    <div>
                        <h2>Acesso negado</h2>
                    </div>
                    <div>
                        <p>Sua sessão expirou ou você não possui permisão para acessar esta pagina. Por favor click em voltar para fazer o login novamente</p>
                    </div>
                </div>
                <div>
                    <Link to={'/'}>Voltar</Link>
                </div>
            </div>
        );
    }
}
