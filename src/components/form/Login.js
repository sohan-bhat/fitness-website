import React, { Component } from 'react';

import {
    FaFacebook,
    FaTwitter,
    FaLinkedinIn
} from 'react-icons/fa'

import Button from '@material-ui/core/Button'
import fire from '../../config/firebase'
import { showSuccessToast, showErrorToast } from '../utils/Tools.js'

class Login extends Component {


    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault()
        fire.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                showSuccessToast("Successfully logged in!")
            }).catch(() => {
                showErrorToast("User not created or email or password")
            })
    }

    updateEmail = (e) => {
        this.setState({
            email: e
        })
    }

    updatePassword = (e) => {
        this.setState({
            password: e
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-container">

                        <h1>Log In</h1>

                        <form className="log-in form">
                            <label className="email">Username or Email:</label><br />

                            <div className="input-field">
                                <input
                                    name="email"
                                    id="email"
                                    type="text"
                                    placeholder="Username or Email"
                                    onChange={e => this.updateEmail(e.target.value)}
                                    autoComplete="off"
                                    defaultValue={this.state.email}
                                /><br />
                            </div>

                            <label className="password">Password:</label><br />

                            <div className="input-field">
                                <input
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={e => this.updatePassword(e.target.value)}
                                    autoComplete="off"
                                    defaultValue={this.state.password}
                                /><br />
                            </div>

                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                value="Log In"
                                style={{
                                    borderRadius: '55px',
                                    textTransform: "none",
                                    marginLeft: "7rem",
                                    width: "10rem",
                                    height: "3rem"
                                }}
                                onClick={this.login}
                            >
                                Log In
                            </Button>
                        </form>

                        <p className="social-text">or sign up with social platforms</p>

                        <div className="social-icon-container">
                            <button className="social-icon facebook">
                                <FaFacebook />
                            </button>

                            <button className="social-icon twitter">
                                <FaTwitter />
                            </button>

                            <button className="social-icon google">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 256 262"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="xMidYMid"
                                >

                                    <path
                                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                        fill="#4285F4"
                                    />

                                    <path
                                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                        fill="#34A853"
                                    />

                                    <path
                                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                        fill="#FBBC05"
                                    />

                                    <path
                                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                        fill="#EB4335"
                                    />
                                </svg>

                            </button>

                            <button className="social-icon linkedin">
                                <FaLinkedinIn />
                            </button>


                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;