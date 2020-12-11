import React, { Component } from 'react'
import './App.css'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

class App extends Component {
    render() {
        return(
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}

export default App;