import React, { Component } from 'react'
import './App.css'

import fire from './config/firebase'

import { Switch } from 'react-router-dom'

import Layout from './hoc/Layout'

import Home from './components/home'

import Login from './components/form/Login'
import SignUp from './components/form/SignUp'
import Dashboard from './components/dashboard'
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
    
    componentDidMount(){
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
        return(
            // <Layout>
            //     <Switch>
            //         <Route exact strict path="/" component={Home} />
            //         <Route exact strict path="/home" component={Home} />
            //         <Route exact strict path="/register/user/login" component={Login} />
            //         <Route exact strict path="/register/user/signup" component={SignUp} />
            //         <Route exact strict path="/register/user/dashboard" component={Dashboard} />
            //     </Switch>
            // </Layout>

            <BrowserRouter>
                <Layout>
                    <Switch>
                        <PublicRoute restricted={false} component={Home} path="/" exact />
                        <PublicRoute restricted={true} component={Login} path="/login" exact />
                        <PublicRoute restricted={true} component={SignUp} path="/signup" exact />
                        <PrivateRoute component={Dashboard} path="/dashboard" exact />
                    </Switch>
                </Layout>
          </BrowserRouter>
        )
    }

}

export default App;