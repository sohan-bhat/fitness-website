import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

class Login extends Component {

    handleClick(e) {
        e.preventDefault()
    }

    render() {

        if (window.location.pathname === "/register/user/login" || window.location.pathname === "localhost:3000/register/user/signup") {
            return (
                

                <div>
                    <div className="container">
                        <div className="form-container">
                            <form className="log-in form">
                                <label>Username:</label><br/>
                                <input type="text" placeholder="Username or Email" /><br/>

                                <label>Password:</label><br/>
                                <input type="password" placeholder="Password" /><br/>

                                <input type="submit" value="Log In" onClick={ this.handleClick.bind(this) }></input>
                            </form>

                        </div>
                    </div>
                </div>

            )
        }
    }
}

export default Login;