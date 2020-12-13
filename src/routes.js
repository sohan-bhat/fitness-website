import React from 'react'
import './App.css'

import { Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout'

import Home from './components/home'
import Forms from './components/form/index'


const App = () => {
    return(
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/register/user/login" component={Forms} />
            </Switch>
        </Layout>
    )
}

export default App;