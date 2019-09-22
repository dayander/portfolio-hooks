'use strict';

export const cartReducer=(action) =>{
    switch(action.type) {
        case "UPDATE_COUNTER":
            console.log('hi');

            return{
                counter: action.payload + 1 ,

            }

