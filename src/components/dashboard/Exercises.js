import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import undraw_jogging from '../../images/undraw_jogging.svg'

class Exercises extends Component {
    render() {
        return (
            <Card>
                <CardActionArea>
                    <img style={{ height: "30vh" }} src={undraw_jogging} alt="jogging" />
                </CardActionArea>
            </Card>
        );
    }
}

export default Exercises;