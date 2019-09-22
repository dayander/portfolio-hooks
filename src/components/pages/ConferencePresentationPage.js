import React from 'react';
import {Header} from "../Header";
import {PageTitle} from "../a11y/pageA11y";
import {getHome, getOne, getProjects} from "../../actions/projectsActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {PullSection} from "../layout/layout";
import {Row, Col, Well, Jumbotron, } from 'react-bootstrap';




class ConferencePresentationPage extends React.Component{


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


        return(
            <div>

                <Header h1={projectObj.companyName}  color={"#fff"} img={projectObj.bgImage}
                        h2={projectObj.projectHeading}
                />


                <div className={'custom-well'}>

                    <Jumbotron className={'white'}>


                <PullSection heading={'About the Presentation'} body={'In March of 2019 I had the oppurtunity to present at Ignite UX Michigan'}/>

                    <div className={'video-container'}>
                        <iframe className={'video-iframe'} src="https://www.youtube.com/embed/69Gjod5B4fw" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                    </Jumbotron>


                </div>



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


export default connect(mapStateToProps, mapDispatchToProps)(ConferencePresentationPage);