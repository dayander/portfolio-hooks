import React from 'react';
import {Link} from 'react-router-dom';


export const ProjectLarge = (props) =>{


    return(
        <Link className="overlay-effect" params={props.to} to={'/work' + props.to}>
            <div style={{ backgroundImage: `url(${props.img})`}} className={props.styleClass + ' project-large'}>
                <div className="project-large content">
                    <div className="content-align">
                        <h2>{props.companyName}</h2>
                        <p className="subheading">{props.projectHeading}</p>
                    </div>
                </div>


            </div>
        </Link>

    )
};