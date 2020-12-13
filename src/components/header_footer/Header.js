import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="relative">
                    <Toolbar
                        style={{
                            backgroundColor: "#03a9f4"
                        }}
                    >
                        <IconButton color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{
                                marginLeft: "86%",
                                textTransform: "none"
                            }}
                            href="/register/user"
                            disableElevation
                            className="button"
                        >Register</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;