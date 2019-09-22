"use strict"
import React from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getPosts} from "../actions/blogActions"
import {getProjects} from "../actions/projectsActions";


import {Link, withRouter} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Icon} from './a11y/pageA11y';


class Menu extends React.Component{
    componentDidMount(){

        // this.props.getPosts();
        // this.props.getProjects();

    }
    render(){
        return(
            <div ref={(app) => { this.app = app; }}>

                <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <Navbar collapseOnSelect inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        Anderson Day
                    </Navbar.Brand>
                    <Navbar.Toggle   />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={()=> null}>
                        <LinkContainer to="/">
                            <NavItem eventKey={1} >Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/work">
                        <NavItem eventKey={2} >Work</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/resume">
                            <NavItem eventKey={3} >Resume</NavItem>
                        </LinkContainer>


                        <LinkContainer to="/contact">
                            <NavItem eventKey={4} >Contact</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>

                        <NavItem href="https://github.com/dayander" eventKey={1} >
                            <Icon img={'/images/GitHub-Mark-Light-120px-plus.png'} alt={"Anderson Days Github"} />
                        </NavItem>



                        <NavItem href="https://www.linkedin.com/in/andersonday/" eventKey={2} >
                            <Icon img={"/images/Linkedin.png"}  alt={"Anderson Days Linkedin"}/>
                        </NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            </div>
        )
    }
}
function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getPosts: getPosts,
        getProjects: getProjects,

    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu))