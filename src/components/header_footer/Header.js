import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SideDrawer from './SideDrawer';
import Button from '@material-ui/core/Button'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import fire from '../../config/firebase'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FitnessLogo } from "../utils/icons"
import { showInfoToast, showSuccessToast } from '../utils/Tools.js';

const Header = ({ user }) => {

    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (value) => {

        setDrawerOpen(value)

    }

    const logout = () => {
        showSuccessToast("Successfully logged out!")
        showInfoToast("Note: You must login again to go to Dashboard")
        fire.auth().signOut();
    }

    return (
        <div>
            <AppBar position="static">

                <Toolbar
                    style={{
                        display: "flex",
                        backgroundColor: "#3260ed",
                    }}
                >

                    <IconButton
                        aria-label="menu"
                        color="inherit"
                        style={{ marginRight: "3%" }}
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <SideDrawer
                        open={drawerOpen}
                        onClose={(value) => toggleDrawer(value)}
                    />

                    <div style={{ flexGrow: 1 }}>
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
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>

                    {fire.auth().currentUser ?

                        <>

                            <Button
                                color="inherit"
                                variant="outlined"
                                href="/dashboard"
                                style={{ marginRight: '2%' }}
                            >Dashboard</Button>

                            <Button
                                color="secondary"
                                variant="contained"
                                style={{ marginRight: "2.5%" }}
                                onClick={() => logout()}
                                href="/home"
                            >Log Out</Button>

                        </>

                        : <div className="signup_login_buttons">

                            <Button
                                className="signup_btn"
                                variant="outlined"
                                color="inherit"
                                disableElevation
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
                                className="login_btn"
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
                            >Log In</Button>

                        </div>
                    }


                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;