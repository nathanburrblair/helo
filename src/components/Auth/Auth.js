import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Auth extends Component {
    constructor (props) {
        super (props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassWord = this.handlePassWord.bind(this);
        this.handleRegisterUser = this.handleRegisterUser.bind(this);
        this.handleLoginUser = this.handleLoginUser.bind(this)
    }

    handleUserName (e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePassWord (e) {
        this.setState({
            password: e.target.value
        })
    }

    handleRegisterUser () {
        axios.post('/api/auth/register', {
            username: this.state.username, 
            password: this.state.password
        }).then(res => this.setState ({  //not entirely sure if i need this or what it's doing
            userzz: res.data,
            username: '',
            password: ''
        }))
        .catch(error => {
            console.log(error.response)
        })
    }

    handleLoginUser () {
        axios.post('/api/auth/login', {
            username: this.state.username,
            password: this.state.password
        }).then(res => this.setState ({
            userzz: res.data,
            username: '',
            password: ''
        }))
    }

    render () {
        console.log(this.state)
        return (
            <div>
                <h1>Auth</h1>
                <div>
                    <h2>Username:</h2><input onChange={this.handleUserName} type="text"/>
                    <h2>Password:</h2><input onChange={this.handlePassWord} type="text"/>
                    <div>
                        <Link to='dashboard'><button onClick={this.handleLoginuser}>Login</button></Link>
                        <Link to='/dashboard'><button onClick={this.handleRegisterUser}>Register</button></Link>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Auth