'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProjects, getHome,getOne} from '../../actions/projectsActions';

import {Jumbotron, Button, Grid, Row, Col, Well} from 'react-bootstrap';
import {Header} from '../Header';

import {PullSection, ProjectLarge} from "../layout/layout";
import {PageTitle} from "../a11y/pageA11y";



const HomePullSectionData = [{heading:'Creating for Everyone',
    body: 'I am an accessibility advocate. I am passionate about creating accessible software, while educating others about digital accessibility'},
    {heading:'Developing From the User\'s Perspective', body: 'Studying Experience Architecture has taught me how to craft' +
        ' experiences from the users perspective. Designing accessible experiences, helps create more meaningful ' +
        'experiences for everyone.'},
    {heading:'Design With Research', body: 'My education also taught me the importance of making infomred decisions about design with data..'},
    {heading:'Creating Tool Box', body: 'I\'ve worked with Javascript, React, Node, Express, Redux, WCAG 2.0, Section508, HTML, ' +
        'CSS, SCSS, Python and Django, Php, CMS including Wordpress, Adobe Business Catalyst, Concrete 5 ' +
        'and Drupal. I’ve also used the Adobe Creative Cloud, Microsoft Office, Universal Design, ' +
        'User Research, Screen Reader - Voiceover'}
                            ];


const HomeProjectSection  = (props) =>{
    return(
        <Well>
            <Row>
                <Col xs={12}>
                    {props.first}
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6}>
                    {props.second}
                </Col>
                <Col xs={12} sm={6}>

                    {props.third}

                </Col>
            </Row>


        </Well>
    )
};




class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }


    componentDidMount() {
        PageTitle("Anderson Days Portfolio");
       


        // Set focus to the content container
        document.getElementById('app').focus();

        // Ensure the viewport returns to the top of the document window
        window.scrollTo(0, 0);


        this.props.getProjects();
    }

    render(){

        const homeHeader = {
            color: '#fff',
            img: '/images/homePageHeader.jpg',
            h1: 'Anderson Day',
            h2: 'I am an Accessibility Advocate'
        };

        const homePageList = this.props.projects.map((projects, i)=>{
            return(
                <ProjectLarge key={i}
                              companyName={projects.companyName}
                              projectHeading={projects.projectHeading}
                              getter={projects.getter}
                              project={projects}
                              to={projects.getter}
                              img={projects.bgImage}/>
            )
        });

        const homePullSection = HomePullSectionData.map((pull, i)=>{
            return <PullSection key={i} heading={pull.heading} body={pull.body}/>;
        });




        return(
            <div>
            <Header color={homeHeader.color} img={homeHeader.img} h1={homeHeader.h1} h2={homeHeader.h2}/>

                <Jumbotron className="white">
                    <div className="container pullquote">
                        <div className="pullquote-inner">
                            <p>
                                Hello, I am a software engineer studying <a href={'http://xa.cal.msu.edu/'}>Experience Architecture</a> at Michigan State University. Being a developer
                                while learning user experience design allows me to create accessible
                                software from the ground up while communicating ideas to other engineers,
                                designers, and various stake holders.
                            </p>

                        </div>
                    </div>
                </Jumbotron>



            <HomeProjectSection
                first={homePageList[2]}
                second={homePageList[1]}
                third={homePageList[3]}
            />



            </div>



        )
    }

}

const mapStateToProps = (state)=>{
    return{

        projects: state.projects,

    }
};

const mapDispatchToProps= ( dispatch) =>{
    return bindActionCreators(
        {
            getProjects


        }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
