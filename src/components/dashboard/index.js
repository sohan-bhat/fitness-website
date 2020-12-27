import React, { Component } from 'react';

import DashLayout from '../../hoc/DashLayout'

class Dashboard extends Component {
    render() {
        return (
            <DashLayout>
                <div className="user_dashboard">
                    <div>
                        This is your Dashboard
                    </div>
                </div>
            </DashLayout>
        );
    }
}

export default Dashboard;