import React, { Component } from 'react';
import { Button } from '@material-ui/core'

class ExerciseLayout extends Component {

    render() {
        return (

            <div>

                <div className="exercise_drawer">

                    <Button>
                        Button
                    </Button>
                    
                </div>

                <div className="exercise_content">
                    {this.props.children}
                </div>

            </div>

        )
    }

};

export default ExerciseLayout;