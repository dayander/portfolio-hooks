import {reset} from "redux-form";
import axios from "axios/index";

export const submitPost = (post) =>{
    console.log("submitting post");

    return (dispatch)=>{
        axios({
            method: 'post',
            url: '/api/post',
            data: post,
        })
            .then(response => {
                dispatch(reset('addPostForm'));

            })
            .catch(err => {

                console.log('err' + err)
            })


    }


};