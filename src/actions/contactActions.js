"use strict";

import axios from 'axios';

export const postContact = (contact) => {



        return function(dispatch){


            axios({
                method: 'post',
                url: '/api/contact',
                data: contact,

            })
                .then(response => {
                    console.log('res',response)

                    dispatch({type:"POST_CONTACT", payload:response.data})
                })
                .catch(err => {
                    dispatch({type:"POST_CONTACT_REJECTED", payload:"there was an error while sending your message"})
                })
        }
    };


export const setFormInput = (input) => {


    return function(dispatch){
    dispatch({type: "SET_FORM_INPUT", payload: input});}
};