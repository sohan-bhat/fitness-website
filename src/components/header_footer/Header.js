import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import { FitnessLogo } from "../ui/icons"

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="relative">
                    <Toolbar
                        style={{
                            display: "flex",
                            backgroundColor: "#03a9f4"
                        }}
                    >

                        <div style={{ flexGrow: 1, marginTop: "5px" }}>
                            <FitnessLogo
                                link={true}
                                linkTo="/"
                                width="70px"
                                height="70px"
                            />
                        </div>

                        <Button
                            variant="outlined"
                            color="secondary"
                            style={{
                                position: "absolute",
                                textTransform: "none",
                                borderColor: "#f44336",
                                left: "82%",
                                padding: "4px 14px",
                                fontWeight: "600"
                            }}
                            href="/register/user/signup"
                            disableElevation
                            className="button"
                        >Sign Up</Button>

                        <Button
                            variant="contained"
                            color="secondary"
                            style={{
                                position: "absolute",
                                left: "89%",
                                textTransform: "none",
                                fontWeight: "600"
                            }}
                            href="/register/user/login"
                            disableElevation
                        >Log In</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;