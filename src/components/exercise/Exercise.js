import React, { Component } from 'react';
import Card from '../utils/Card'
import { firebaseDocList } from '../../config/firebase';

class Exercises extends Component {

    constructor(props){
        super(props)
        this.state = {
            exerciseInfo: {
                exercisesName: ['placeholder']
            }
        }
    }

    componentWillMount(){
        console.log("COMPONENT MOUNT")
        var example = firebaseDocList()
        example.then((value) =>{
            this.setState({exerciseInfo: value})
        })
    }

    render() {
        

        return (

            
            <div>
                {this.state.exerciseInfo.exercisesName[1]}
            </div>

        );
    }

}

export default Exercises;