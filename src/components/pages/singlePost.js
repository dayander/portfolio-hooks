import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getHome, getOne, getProjects} from "../../actions/projectsActions";
import Header from "../Header";
import {FullWidthPageTitle} from "../layout/layout";
import {BlogPostContentHTML} from "../util/index";


class SinglePost extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        const postObj =  this.props.posts.find(x => x.slug === this.props.params);


        return(
            <div>
                 <FullWidthPageTitle h1={postObj.title} h2={postObj.name}/>

                <div className='bodyContent' dangerouslySetInnerHTML={BlogPostContentHTML(postObj.content)}></div>
            </div>
        )
    }

}





const mapStateToProps = (state)=>{
    return{

        posts: state.posts,

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


export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);