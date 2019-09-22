import React from 'react';
import {Header} from "../Header";
import {Row, Col, Well, Jumbotron, } from 'react-bootstrap';
import {PullSection} from "../layout/layout";
import {Picture} from "../layout/layout";
import {PageTitle} from "../a11y/pageA11y";
import {getHome, getOne, getProjects} from "../../actions/projectsActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {ProjectLarge} from "../projects/ProjectLarge";


class SkiHillA11yPage extends React.Component{

    constructor(props){
        super(props);
    }


    componentDidMount(){


        document.getElementById('app').focus();
        window.scrollTo(0, 0);





        const projectObj = this.props.projects.find(x => x.address === this.props.match.path);

        console.log(projectObj)



        PageTitle("Ski Hill A11y" + " || Anderson Day");
    }




    render(){
        const projectObj = this.props.projects.find(x => x.address === this.props.match.path);

        const proejctList = this.props.projects.map((project, i)=>{

            if(project !== projectObj && i < 2){
                return(


                    <Col className={'container'} key={i} xs={12} sm={6} bsStyle='project-list'>
                        {/*<BookItem  _id={project._id} title={project.title} images={project.images} description={project.description} price={project.price} />*/}
                        <ProjectLarge companyName={project.companyName} projectHeading={project.projectHeading} getter={project.getter} to={project.getter} img={project.bgImage} styleClass={'small'} />
                    </Col>


                )
            }
        });


        const ProjectPictureLarge = () =>{
            return(
                <Row>
                    <div className="container">
                        <Col xs={12}>
                            <Picture src={projectObj.largeImage} alt={''}/>

                        </Col>
                    </div>
                </Row>
            )
        };






        return(
            <div>
                <Header h1={'Ski Hill A11y'}  color={"#fff"} img={'/images/skihill-a11y/headerImage.jpg'}
                    h2={'An App for Accessibility Education'}
                />
                <div className={'white custom-well'}>
                    <Jumbotron className={'project-overview'}>
                    <div className={'container'}>
                        <h2>Project Overview</h2>



                                <h3>Project Description: </h3>
                                <p>Ski hill a11y is a web application that has two copies of the site that
                                    are easily toggled between. The site starts out in accessible and allows
                                    the user to toggle to the accessible version. I built this as a tool for
                                    learning web developers to see examples of what makes a site accessible versus
                                    in accessible. The application contains errors with heading structure, language
                                    of the web page, color contrast, image alternative text, form labels on inputs,
                                    being able to increase text size, keyboard navigation, semantic lists and updating
                                    page titles. This project was also presented at the Accessible Learning Confernce 2018,
                                    "An Introduction to Web Accessibility."</p>



                                <h3>Technologies Used: </h3>
                                    <ul>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>Node and Express</li>
                                        <li>WCAG 2.0</li>
                                    </ul>





                                <h3>Project Role: </h3>
                                    <p> I designed and developed this application with input from Michigan State University
                                        faculty aligning course goals with accessibility knowledge in the Experince Architecture's
                                    program Introduction to Web Authoring and Advacned Web Authoring</p>

                                <h3>Live Project Links </h3>
                        <ul>
                            <li>
                                <a href={"http://skihill-a11y.herokuapp.com/"} > Ski Hill A11y Live </a>
                            </li>
                            <li>
                                <a href={"https://docs.google.com/presentation/d/1SPBQfTHbIX4fvw4XtloGkpQK8mSqqygUKhpTAvL6zpA/edit?usp=sharing"} > Accessible Learning Conference Presentation Slides </a>
                            </li>
                            <li>
                                <a href={"https://github.com/dayander/Accessible-Learning-Confernce-2018-presentation-w-server"} > Ski Hill A11y Github Repo </a>
                            </li>


                        </ul>



                    </div>
                    </Jumbotron>
                </div>





                <PullSection  heading={'Challenge'} body={projectObj.challenge}/>

                <ProjectPictureLarge/>

                <PullSection heading={'Process'} body={'With the goal of educating designers for the web, Ski Hill A11y provides a way for those learning HTML and CSS to see a real example of how small changes in code make a large difference in the overall accessibility of the site.'}/>


                <PullSection heading={'Outcome'} body={'A web application for those learning basic web development and accessibility to see differnces in accessible and not accessible HTML and CSS.'}/>




                <Well>
                    <Row>
                        <div className="container">
                            <h2>Onward</h2>
                        </div>
                        {proejctList}
                    </Row>
                </Well>

            </div>
        )
    }


}


const mapStateToProps = (state)=>{
    return{

        projects: state.projects,
        projectName: state.projectName,


    }
};

const mapDispatchToProps= ( dispatch) =>{
    return bindActionCreators(
        {
            getProjects,
            getHome,
            getOne,

        }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(SkiHillA11yPage);