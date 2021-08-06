import React from 'react';

import { Drawer, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom'


const SideDrawer = (props) => {

    return (

        <Drawer
            anchor="left"
            open={props.open}
            onClose={() => props.onClose(false)}
        >

            <List component="nav" style={{ marginTop: "70%" }}>

                <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>

                    <ListItem button style={{ padding: "2rem", fontWeight: "bold" }}>

                        Home

                    </ListItem>

                </Link>

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