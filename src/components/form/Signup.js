import React, { Component } from 'react';

import {
    FaFacebook,
    FaTwitter,
    FaLinkedinIn,
} from 'react-icons/fa'

import fire from '../../config/firebase'

import Button from '@material-ui/core/Button'

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.formError = this.formError.bind(this)
        this.signup = this.signup.bind(this)

        this.state = {
            email: "",
            password: "",
            displayName: ""
        }

    }

    formError = (e) => {

        e.preventDefault()

        const username = document.getElementById('username').value
        const email = document.getElementById('email').value
        const password = document.getElementById("password").value
        const password_check = document.getElementById("confirm-password").value

        if (!username.trim()) {
            alert('Username required')
        } else if (username.length < 6) {
            alert("Username must be at least 6 characters long")
        } else if (!email) {
            alert('Email required')
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Email address is invalid')
        } else if (!password) {
            alert('Password is required')
        } else if (password.length < 6) {
            alert('Password needs to be 6 characters or more')
        } else if (!password_check) {
            alert('Confirm Password is required')
        } else if (password_check !== password) {
            alert('Passwords do not match')
        } else {
            this.signup()
        }

    }

    signup = () => {


        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                return user.user.updateProfile({
                    displayName: this.state.displayName
                })
            }).catch((err) => {
                console.log(err);
            })
    }

    updateEmail = (e) => {
        let test = e.trim();

        this.setState({
            email: test
        })
    }

    updatePassword = (e) => {

        this.setState({
            password: e
        })
    }

    updateDisplayName = (e) => {

        this.setState({
            displayName: e
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-container">

                        <h1>Sign Up</h1>

                        <form>

                            <label className="username">Full Name:</label>

                            <div className="input-field">
                                <input
                                    name="username"
                                    id="username"
                                    type="text"
                                    placeholder="Full Name"
                                    autoComplete="off"
                                    onChange={e => this.updateDisplayName(e.target.value)}
                                />
                            </div>

                            

                            <label className="email">Email: </label>

                            <div className="input-field">
                                <input
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={e => this.updateEmail(e.target.value)}
                                    autoComplete="off"
                                />
                            </div>

                            

                            <label className="password">Password:</label>

                            <div className="input-field">
                                <input
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={e => this.updatePassword(e.target.value)}
                                    autoComplete="off"
                                />
                            </div>

                            

                            <label className="password-check">Confirm Password:</label>

                            <div className="input-field">
                                <input
                                    name="confirmPassword"
                                    id="confirm-password"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                            </div>

                            


                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                value="Sign Up"
                                style={{
                                    borderRadius: '55px',
                                    textTransform: "none",
                                    marginLeft: "6.5rem",
                                    width: "10rem",
                                    height: "3rem"
                                }}
                                onClick={this.formError}
                            >
                                Sign Up
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

export default SignUp;