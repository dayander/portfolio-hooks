"use strict";

import axios from 'axios';
var qs = require('qs');


//BOOK ACTIONS

//GET BOOKS
export const getProjects=(projectName) =>{


        return (dispatch)=>{
            axios({
                method: 'get',
                url: '/api/projects',
                data: projectName,
            })
            .then((response)=>{


                dispatch({type: "GET_PROJECTS", payload: response.data})
            })
            .catch((err)=>{
                dispatch({type: "GET_PROJECTS_REJECTED", payload: err})
            })
    }
};


export const getOne=(projectName) =>{


    return (dispatch)=>{
        axios.get('/api/projects/'+ projectName, )
            .then((response)=>{


                dispatch({type: "GET_ONE", payload: response.data})
            })
            .catch((err)=>{
                dispatch({type: "GET_ONE_REJECTED", payload: err})
            })
    }
};


export const getHome=() =>{


    return (dispatch)=>{
        axios.get('/api/projects/' )
            .then((response)=>{


                dispatch({type: "GET_HOME", payload: response.data})
            })
            .catch((err)=>{
                dispatch({type: "GET_HOME_REJECTED", payload: err})
            })
    }
};



// POST BOOK
// // POST A BOOK
// export function postBook(book){
//     return function(dispatch){
//
//         axios({
//             method: 'post',
//             url: '/api/books',
//             data: book,
//
//         })
//             .then(function(response){
//                 console.log( 'resposne: hi: ', response);
//                 dispatch({type:"POST_BOOK", payload:response.data})
//             })
//             .catch(function(err){
//                 dispatch({type:"POST_BOOK_REJECTED", payload:"there was an error while posting a new book"})
//             })
//     }
// }
//
//
// //DELETE BOOK
//
//
// export const deleteBook=(id)=>{
//     return (dispatch)=>{
//         axios.delete("/api/books/"+id)
//             .then((response)=>{
//                 dispatch({type: "DELETE_BOOK", payload: id})
//             })
//             .catch((err)=>{
//                 dispatch({type: "DELETE_BOOK_REJECTED", payload: err})
//             })
//     }
//
// };
//
// //UPDATE BOOK
//
// export const updateBook=(book)=>{
//     return {type: "UPDATE_BOOK", payload: book}
//
// };
//
//
// //Reset Button
//
// export const resetButton=()=>{
//     return {type: "RESET_BUTTON"}
//
// };


