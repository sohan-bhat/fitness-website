import React, { Component } from 'react';

import DashLayout from '../../hoc/DashLayout'
import fire from '../../config/firebase'

class Dashboard extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    returnCurrentUserName = () => {
        if (fire.auth().currentUser.displayName === null) {
            window.location.reload()
        } else {
            return `Hi ${fire.auth().currentUser.displayName} this is your dashboard!`            
        }

    }

    render() {
        return (
            <DashLayout>
                <div className="user_dashboard">
                    <div>
                       {this.returnCurrentUserName()}
                    </div>
                    <button onClick={this.logout}>Logout</button>
                </div>
            </DashLayout>
        );
    }

    
}

export default Dashboard;