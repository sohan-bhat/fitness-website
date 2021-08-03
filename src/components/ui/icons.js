import React from 'react'
import { Link } from 'react-router-dom'

import fitscape from '../../images/fitscape.png'

export const FitnessLogo = (props) => {

    const template = <div
        className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background: `url(${fitscape}) no-repeat`,
        }}
    >
        
    </div>

    if (props.link) {
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    } else {
        return template
    }

}