import React from 'react';
import axios from 'axios';
import {reset} from 'redux-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import AddPostForm from '../forms/addPostForm';
import {contactSubmit} from "./contactSubmit";
import {submitPost} from '../../actions/adminActions';

class ConnectedAddPostForm extends React.Component{
    submit = values => {

        this.props.submitPost(values);

    }

    render(){


        return(
            <div>
            <AddPostForm onSubmit={this.submit} />
            </div>
        )
    }
}




const mapDispatchToProps= (dispatch)=>{
    return bindActionCreators({
        submitPost
    }, dispatch)
}



//ConnectedAddPostForm = connect(null, mapDispatchToProps)(AddPostForm);

export default ConnectedAddPostForm;