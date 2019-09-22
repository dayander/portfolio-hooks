import React from 'react';
import {getProjects, getHome,getOne} from '../../actions/projectsActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Header} from "../Header";
import PullQuote from "../pullQuote";


import {Row, Col, Well} from 'react-bootstrap';
import {ProjectLarge} from './ProjectLarge';
import {DoublePicture, PullSection, Picture} from "../layout/layout";
import {PageTitle} from "../a11y/pageA11y";









class ProjectPage extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }


    componentDidMount(){
        const projectObj = this.props.projects.find(x => x.getter === this.props.params);
        //document.title = this.state.project.projectHeading +' || Anderson Day';
        //this.props.getOne(this.props.match.params.title);
            PageTitle(projectObj.projectHeading + " || Anderson Day");
         // this.props.getProjects();
        // Set focus to the content container
        document.getElementById('app').focus();
21
        // Ensure the viewport returns to the top of the document window
        window.scrollTo(0, 0);



    }


    render(){


        const projectObj = this.props.projects.find(x => x.getter === this.props.params);




        const proejctList = this.props.projects.map((project, i)=>{

            if(project !== projectObj){
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
                            <Picture src={projectObj.outcome01.imgPath} alt={projectObj.outcome01.altText}/>

                        </Col>
                    </div>
                </Row>
            )
        };




        return(
            <div ref='hey'>


            <Header color={"#fff"} img={projectObj.bgImage} h1={projectObj.companyName} h2={projectObj.projectHeading}/>
                <PullSection heading={projectObj.challengeHeading} body={projectObj.challenge}/>



                <DoublePicture img1={projectObj.challenge01} img2={projectObj.challenge02}/>

                <PullSection heading={projectObj.approachHeading} body={projectObj.approach}/>
                <DoublePicture img1={projectObj.process01} img2={projectObj.process02}/>

                {/*<Row >*/}
                    {/*<div className="container">*/}
                    {/*<Col xs={12} sm={6}>*/}
                        {/*<Picture img={projectObj.process01.imgPath} alt={projectObj.process01.altText}/>*/}
                    {/*</Col>*/}
                    {/*<Col xs={12} sm={6}>*/}
                        {/*<Picture img={projectObj.process02.imgPath} alt={projectObj.process02.altText} />*/}
                    {/*</Col>*/}
                    {/*</div>*/}
                {/*</Row>*/}

                <PullSection heading={projectObj.outcomeHeading} body={projectObj.outcome}/>
                <ProjectPictureLarge/>

<Well>
                <Row>
                    <div className="container">
                        <h2>Onward</h2>
                    </div>
                    {proejctList}
                </Row>
</Well>




                {/*<Link params={projectObjArr[this.state.index - 1].to} to={projectObjArr[this.state.index - 1].to}>*/}
                    {/*Previous Project*/}
                {/*</Link>*/}
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


 export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);