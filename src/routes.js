import React, { Component } from 'react'
import './App.css'

import fire from './config/firebase'

import { Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout'

import Home from './components/home'

import Login from './components/form/Login'
import SignUp from './components/form/SignUp'
import Dashboard from './components/dashboard'


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }

    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    user
                })
            } else {
                this.setState({
                    user: null
                })
            }
        })
    }

    render() {

        return(
            <Layout>
                <Switch>
                    <Route exact strict path="/" component={Home} />
                    <Route exact strict path="/home" component={Home} />
                    <Route exact strict path="/register/user/login" component={Login} />
                    <Route exact strict path="/register/user/signup" component={SignUp} />
                    <Route exact strict path="/register/user/dashboard" component={Dashboard} />
                </Switch>
            </Layout>
        )
    }
}

export default App;