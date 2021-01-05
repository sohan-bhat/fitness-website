import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class CarouselSlider extends Component {
    render() {
        return (
            <div className="carousel_wrapper">
                <Carousel className="carousel" keyboard={true} touch={true} slide={true}>

                    <Carousel.Item className="carousel-item">
                        Slide #1
                    </Carousel.Item>

                    <Carousel.Item className="carousel-item">
                        Slide #2
                    </Carousel.Item>

                    <Carousel.Item className="carousel-item">
                        Slide #3
                    </Carousel.Item>

                    <Carousel.Item className="carousel-item">
                        Slide #4
                    </Carousel.Item>

                </Carousel>
            </div>
        );
    }
}

export default CarouselSlider;