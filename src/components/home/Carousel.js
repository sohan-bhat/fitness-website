import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import undraw_activity_tracker from '../../images/undraw_activity_tracker.svg'
import undraw_fitness_stats from '../../images/undraw_fitness_stats.svg'
import undraw_mindfulness from '../../images/undraw_mindfulness.svg'
import undraw_private_data from '../../images/undraw_private_data.svg'
import undraw_working_out from '../../images/undraw_working_out.svg'

class CarouselSlider extends Component {
    render() {
        return (
            <div className="carousel_wrapper">
                <Carousel className="carousel" keyboard={true} touch={true} slide={true}>

                    <Carousel.Item className="carousel-item">
                        <img src={undraw_activity_tracker} />

                        <hr color="white" />

                        <div className="img_text">
                            Activity Tracker
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className="carousel-item">
                        <img src={undraw_fitness_stats} />

                        <hr color="white" />

                        <div className="img_text">
                            Fitness Stats
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className="carousel-item">
                        <img src={undraw_mindfulness} />

                        <hr color="white" />

                        <div className="img_text">
                            Mindful Fitness
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className="carousel-item">
                        <img src={undraw_private_data} />

                        <hr color="white" />

                        <div className="img_text">
                            Private Data
                        </div>
                    </Carousel.Item>

                </Carousel>
            </div>
        );
    }
}

export default CarouselSlider;