import React, { Component } from 'react';
import fire from '../../config/firebase'

class Home extends Component {



    render() {
        console.log(fire.auth().currentUser)
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Welcome! Login or signup!</h1>
            </div>
        );
    }

}

export default Home;