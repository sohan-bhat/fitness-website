import React, { Component } from 'react';

import DashLayout from '../../hoc/DashLayout'
import fire from '../../config/firebase'

import Button from '@material-ui/core/Button'
import { showInfoToast, showSuccessToast } from '../utils/Tools';

class Dashboard extends Component {

    logout = () => {
        showSuccessToast("Successfully logged out!")
        showInfoToast("Note: You must login again to go to Dashboard")
        fire.auth().signOut();
    }

    returnCurrentUserName = () => {
        if (fire.auth().currentUser.displayName === null) {
            window.location.reload()
        } else {
            return (
                <div className="dashboard-text">
                    Hi {fire.auth().currentUser.displayName}, Welcome to your <span>Dashboard!</span>
                </div>
            )
        }

    }

    render() {
        return (
            <DashLayout>
                <div className="user_dashboard">
                    <div className="dash_text">
                        {this.returnCurrentUserName()}
                    </div>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#333",
                            color: "inherit",
                            outline: "none",
                            border: "none",
                            padding: "1% 2%"
                        }}
                        onClick={this.logout}
                    >Log out</Button>
                </div>
            </DashLayout>
        );
    }


}

export default Dashboard;