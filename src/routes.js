import React, { Component } from 'react'
import './App.css'

import fire from './config/firebase'

import { Switch } from 'react-router-dom'

import Layout from './hoc/Layout'

import Home from './components/home'

import Dashboard from './components/dashboard'
import Exercises from './components/dashboard/Exercises'

import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }


    }

    componentDidMount() {
        this.authListener();
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
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <PublicRoute restricted={false} component={Home} path="/" exact />
                        <PrivateRoute component={Dashboard} path="/dashboard" exact />
                        <PublicRoute component={Exercises} path="/exercises" exact />
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }

}

export default App;