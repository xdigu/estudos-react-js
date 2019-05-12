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
        console.log(user);
    };

    updatePassState = (event) => {
        let pass = event.target.value;
        console.log(pass);
    };

    userAuthentication = () => {
        console.log('localStorage');
        localStorage.setItem('acessKey', '1234');
        // localSession.setItem();
    };

    render() {
        return (
            <div className="login">
                <div className="login-info">
                    <div>
                        <input onChange={this.updateUserState} placeholder="Usuário" ></input>
                    </div>
                    <div>
                        <input onChange={this.updatePassState} type="password" placeholder="Senha"></input>
                    </div>
                    <div>
                        <a> Recuperar Senha</a>
                    </div>
                </div>
                <div>
                    <button onClick={() => this.userAuthentication()}> Acessar </button>
                </div>
            </div>
        );
    }
}
