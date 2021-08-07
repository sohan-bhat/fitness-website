import React, { Component } from 'react'
import './App.css'

import fire from './config/firebase'

import { Switch } from 'react-router-dom'

import Layout from './hoc/Layout'

import Home from './components/home'
import PageNotFound from './components/PageNotFound'

import Login from './components/form/Login'
import Signup from './components/form/Signup'

import Dashboard from './components/dashboard'
import Exercises from './components/dashboard/Exercises'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Route } from 'react-router-dom';
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
            <>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <PublicRoute restricted={false} component={Home} path={["/", "/home"]} exact />
                            <PublicRoute restricted={true} component={Login} path="/login" exact />
                            <PublicRoute restricted={true} component={Signup} path="/signup" exact />
                            <PrivateRoute component={Dashboard} path={["/dashboard", "/admin"]} exact />
                            <Route component={Exercises} path={["/dashboard/exercises", "/admin/exercises"]} exact />
                            <Route component={PageNotFound} />
                        </Switch>
                    </Layout>

                </BrowserRouter>
                <ToastContainer />
            </>
        )
    }

}

export default App;