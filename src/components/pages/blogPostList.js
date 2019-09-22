"use strict";

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPosts} from '../../actions/blogActions';
import {Carousel,Grid, Col, Row, Button} from 'react-bootstrap';
import {Header} from "../Header";
import { Route, Switch, Link, withRouter} from 'react-router-dom';

import PostLarge from '../postLarge';
import {PageTitle, setFocus} from "../a11y/pageA11y";
import {TopLevelH2} from "../layout/layout";










class BlogPostList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }


     componentDidMount(){


         PageTitle('Blog Posts || Anderson Day');
         setFocus();
         // Set focus to the content container


         // Ensure the viewport returns to the top of the document window




        this.props.getPosts()




    }
    render(){


        console.log(this.props.posts)
        const blogPostList = this.props.posts.map((post, i)=>{
            return(
                <Row key={i} className='blog-list-item'>
                    <Col xs={12}  >

                        <Link params={`${this.props.match.url}${post.slug}`} to={`${this.props.match.url}${post.slug}`} >
                            <PostLarge  title={post.name} content={post.content} />
                        </Link>

                    </Col>
                </Row>
            )
        });



        return(
            <div>

                <Header h1={"Anderson's Blog Posts"}   h2={"A place where I share my ideas and research"}/>

                <Row style={{marginTop: '15px'}}>
                    <TopLevelH2 heading={'What I\'ve been thinking about.'} subHeading={'Find a range of topics. Read about what interests me and what I think it useful information to share'}/>
                    {blogPostList}
                </Row>

            </div>
        )
    }

}


const mapStateToProps = (state)=>{
    return{
    posts:state.posts,
    }
};

const mapDistpatchTopProps = (dispatch) =>{
    return bindActionCreators({
        getPosts,

    }, dispatch)
};

export default connect(mapStateToProps, mapDistpatchTopProps)(BlogPostList);