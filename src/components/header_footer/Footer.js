import React, { Component } from 'react';

import { FitnessLogo } from '../ui/icons'

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
                    moreforfitness® Copyright © 2020. All Rights Reserved
                </div>

            </footer>
        );
    }
}

export default Footer;