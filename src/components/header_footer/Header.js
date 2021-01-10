import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import { FitnessLogo } from "../ui/icons"

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar
                        style={{
                            display: "flex",
                            backgroundColor: "#03a9f4"
                        }}
                    >

                        <div style={{ flexGrow: 1, marginTop: "5px" }}>
                            <FitnessLogo
                                className="fitness_logo"
                                link={true}
                                linkTo="/"
                                width="50px"
                                height="50px"
                            />
                        </div>

                        <Button
                            variant="outlined"
                            color="secondary"
                            style={{
                                position: "relative",
                                textTransform: "none",
                                borderColor: "#f50057",
                                left: "-7.5%",
                                padding: "4px 14px",
                                fontWeight: "600",
                                color: "#f50057"
                            }}
                            href="/signup"
                        >Sign Up</Button>

                        <Button
                            variant="contained"
                            color="secondary"
                            style={{
                                position: "inherit",
                                left: "-6%",
                                textTransform: "none",
                                fontWeight: "600",
                                color: "#ffffff"
                            }}
                            href="/login"
                            className="login-btn"
                        >Log In</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;