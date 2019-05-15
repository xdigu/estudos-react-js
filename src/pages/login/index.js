import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './styles.css'

export default class Login extends Component {
    state = {
        user: '',
        pass: ''
    };

    updateUserState = (event) => {
        let user = event.target.value;
        this.setState({ user });
    };

    updatePassState = (event) => {
        let pass = event.target.value;
        this.setState({ pass });

    };

    userAuthentication = () => {
        const { user, pass } = this.state;

        if (user === pass) {
            console.log('authenticated');
            localStorage.setItem('authenticated', true);
            window.open('/products', '_self');
        } else {
            localStorage.setItem('authenticated', false);
            console.log('deu ruim');
        }

    };

    render() {
        return (
            <div className="login">
                <div className="login-info">
                    <div>
                        <h2>Pagina de login</h2>
                        <p>Utilize o seu usuário e senha para fazer login e ter acesso aos produtos.</p>
                    </div>

                    <div>
                        <input onChange={this.updateUserState} placeholder="Usuário" ></input>
                    </div>

                    <div>
                        <input onChange={this.updatePassState} type="password" placeholder="Senha"></input>
                    </div>

                    <div>

                    </div>
                </div>
                <div>
                    <button onClick={() => this.userAuthentication()}> Acessar </button>
                </div>
            </div>
        );
    }
}
