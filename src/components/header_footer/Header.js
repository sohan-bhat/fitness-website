import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FitnessLogo } from "../ui/icons"

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar
                        style={{
                            display: "flex",
                            backgroundColor: "#03a9f4",
                        }}
                    >

                        <div style={{ flexGrow: 1, marginTop: "5px" }}>
                            <FitnessLogo
                                className="fitness_logo"
                                link={true}
                                linkTo="/"
                                width="70px"
                                height="70px"
                            />
                        </div>

                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Find Exercise"
                                className="search-txt"
                            />
                            <button className="search-btn"
                                type="submit"
                                ref={input => this.button = input}
                                onClick={this.redirectSearch}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>

                        <Button
                            variant="outlined"
                            color="inherit"
                            disableElevation="true"
                            style={{
                                position: "relative",
                                textTransform: "none",
                                borderColor: "#f50057",
                                left: "-7.5%",
                                padding: "4px 14px",
                                fontWeight: "600",
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