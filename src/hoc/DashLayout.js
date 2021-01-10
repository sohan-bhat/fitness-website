import React, { Component } from 'react';

import Button from '@material-ui/core/Button'

class DashLayout extends Component {
    render() {
        return (
            <div className="admin_container">

                <div className="admin_left_nav">
                    <Button href="dashboard/exercises" variant="outlined" color="secondary" style={{ color: "#f50057", outline: "none" }}>
                        View Exercises
                    </Button>
                </div>

                <div className="admin_right">
                    {this.props.children}
                </div>

            </div >
        );
    }

};

export default DashLayout;