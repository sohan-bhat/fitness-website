import React from 'react'
import { Link } from 'react-router-dom'

import fitworld from '../../images/fitworld.png'

export const FitnessLogo = (props) => {

    const template = <div
        className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background: `url(${fitworld}) no-repeat`,
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