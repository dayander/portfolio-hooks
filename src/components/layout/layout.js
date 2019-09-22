import React from 'react';
import {Jumbotron, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export const PullSection =(props) => {
    return(
        <Jumbotron className="white">
            <div className="container pullquote">
                <div className="pullquote-inner">

                    <h2>
                  <span className='underline' >
                      {props.heading}
                  </span>
                    </h2>
                    <p>
                        {props.body}
                    </p>

                </div>
            </div>
        </Jumbotron>
    )
};



export const ProjectLarge = (props) =>{
    return(
    <Link className="overlay-effect" params={props.to} to={'/work'+props.to}>
        <div style={{ backgroundImage: `url(${props.img})`}} className={props.styleClass + ' project-large'}>
            <div className="project-large content">
                <div className="content-align">
                    <h2>
                        {props.companyName}
                    </h2>
                    <p className="subheading">
                        {props.projectHeading}
                    </p>
                </div>
            </div>
        </div>
    </Link>
    )

};


export const Picture = (props) =>{
    return(
        <div className="">
            <div className=" content">

                <img className="image-center" src={props.src} alt={props.alt}></img>
            </div>

        </div>
    )
};

export const DoublePicture = (props) => {
    return(
        <Row >
            <div className="container">
                <Col xs={12} sm={6}>
                    <Picture src={props.img1.imgPath} alt={props.img1.altText}/>
                </Col>
                <Col xs={12} sm={6}>
                    <Picture src={props.img2.imgPath} alt={props.img2.altText} />
                </Col>
            </div>
        </Row>
    )
};



export const FullWidthPageTitle = (props) => {

    const h2 = <h2>{props.h2}</h2>
    return(
        <div id="content"  tabIndex="-1">
            <div className='jumbotron header-image'>
                <div className='container'>
                 <h1>{props.h1}</h1>
                    {(props.h2)?(h2):('')}
                </div>
            </div>
        </div>
  )
};


export const TopLevelH2 = (props) => {
    return(
    <div className="container">
        <h2>{props.heading}</h2>
        <p>{props.subHeading}</p>
    </div>
    )
};