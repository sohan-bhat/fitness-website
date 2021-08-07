import React from 'react';

import { Drawer, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom'
import fire from '../../config/firebase'
import { showSuccessToast, showInfoToast } from '../utils/Tools'

const SideDrawer = (props) => {

    const logout = () => {
        showSuccessToast("Successfully logged out!")
        showInfoToast("Note: You must login again to go to Dashboard")
        fire.auth().signOut();
    }

    return (

        <Drawer
            anchor="left"
            open={props.open}
            onClose={() => props.onClose(false)}
        >

            <List component="nav" style={{ marginTop: "70%" }} onClick={() => props.onClose(false)}>

                <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>

                    <ListItem button style={{ padding: "2rem", fontWeight: "bold" }}>

                        Home

                    </ListItem>

                </Link>

                {fire.auth().currentUser ?

                    <>

                        <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>

                            <ListItem button style={{ padding: "2rem", fontWeight: "bold" }}>

                                Dashboard

                            </ListItem>

                        </Link>

                        <Link onClick={() => logout()} style={{ textDecoration: "none", color: "inherit" }}>

                            <ListItem button style={{ padding: "2rem", fontWeight: "bold" }}>

                                Logout

                            </ListItem>

                        </Link>

                    </>

                    :

                    <>
                        <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>

                            <ListItem button style={{ padding: "2rem", fontWeight: "bold" }}>

                                Sign Up

                            </ListItem>

                        </Link>

                        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>

                            <ListItem button style={{ padding: "2rem", fontWeight: "bold" }}>

                                Login

                            </ListItem>

                        </Link>
                    </>

                }

                <Link to="/aboutUs" style={{ textDecoration: "none", color: "inherit" }}>

                    <ListItem button style={{ padding: "2rem", fontWeight: "bold" }}>

                        About Us

                    </ListItem>

                </Link>

                <Link to="/report" style={{ textDecoration: "none", color: "inherit" }}>

                    <ListItem button style={{ padding: "2rem", fontWeight: "bold" }}>

                        Report a Problem

                    </ListItem>

                </Link>

            </List>

        </Drawer>

    );

};

export default SideDrawer;