import React from 'react'


import { Field, reduxForm } from 'redux-form'




const AddPostForm = ({onSubmit}) =>{


    console.log(onSubmit)

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor={'post-name'}>Post Name</label>
            <Field  id={'post-name'}
                    name="postName"
                    component="input"
                    type="text"
                    placeholder="Post Name"/>
            <label htmlFor={'post-title'}>Post Title</label>
            <Field  id={'post-title'}
                    name="postTitle"
                    component="input"
                    type="text"
                    placeholder="Post Title"/>
            <label htmlFor={'post-content'}>Post Content</label>
            <Field  id={'post-content'}
                    name="postContent"
                    component="input"
                    type="text"
                    placeholder="content"/>


            <button type={'submit'}>Add Post</button>


        </form>
    )
};





export default reduxForm({
    form: 'addPostForm',
    // a unique identifier for this form
})(AddPostForm)