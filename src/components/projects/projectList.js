'use strict';

import React from 'react';

import {Row,Col, Well} from 'react-bootstrap';

import {ProjectLarge} from './ProjectLarge';



import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProjects} from '../../actions/projectsActions';
import {Header} from "../Header";
import {PageTitle, setFocus} from "../a11y/pageA11y";


class ProjectList extends React.Component{


    constructor(props){
        super(props);


    }

    componentDidMount(){

        PageTitle("Anderson Day's Work");
        // Set focus to the content container
        setFocus();

        // Ensure the viewport returns to the top of the document window
        window.scrollTo(0, 0);

        this.props.getProjects();





    }



    render(){

        const proejctList = this.props.projects.map((project, i)=>{
            return(

                <Row  key={i}>
                    <Col xs={12} bsStyle='project-list'>

                        <ProjectLarge companyName={project.companyName}
                                      projectHeading={project.projectHeading}
                                      getter={project.getter}
                                      to={project.getter}
                                      img={project.bgImage}
                                      match={this.props.match}
                                      styleClass={'small'}/>
                    </Col>
                </Row>

            )
        });


        return(
            <div>
                <Header h1={"Work Examples"} />


                <Well>
                    {proejctList}
                </Well>

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


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

