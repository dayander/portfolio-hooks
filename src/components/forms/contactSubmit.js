import axios from 'axios';
import {reset} from 'redux-form';




export function contactSubmit(contact){

    return function (dispatch) {

        axios({
            method: 'post',
            url: '/api/contact',
            data: contact,
        })
        .then(response => {
            dispatch(reset('contact'));
            
    })
        .catch(err => {

            console.log('err' + err)
        })


    }



}



