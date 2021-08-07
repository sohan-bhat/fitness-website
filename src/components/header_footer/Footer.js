import React, { Component } from 'react';

import { FitnessLogo } from '../utils/icons'

class Footer extends Component {
    render() {
        return (
            <footer className="bck_blue">

                <div>
                    <FitnessLogo
                        link={true}
                        linkTo="/"
                        width="70px"
                        height="70px"
                    />
                </div>

                <div className="footer_disclaimer">
                    Fitscape Copyright © 2021 - 2030. All Rights Reserved
                </div>

            </footer>
        );
    }
}

export default Footer;