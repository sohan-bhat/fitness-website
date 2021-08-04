import React, { Component } from 'react';

import gym_equipment from '../../images/equipment.jpg'

class Home extends Component {
    render() {

        return (
            
            <div>

                <div className="splash-page-text">

                    The Best Workout <span>Organization</span>
                    
                </div>

                <img className="splash-page-img" src={gym_equipment} style={{height: "100%", width: '100%'}} alt="gym equipment" />
                
            </div>
            
        )
    }

}

export default Home;