"use strict";

//Cart reducers



const initialState = {

        name: '',
        email: '',
        message:'',
        success: false,
        failed: false,


};

export const contactReducer=(state=initialState, action) =>{

    switch(action.type) {
        case "POST_CONTACT":




            return{...state, contact:{

                        name: '',
                        email:'',
                        message: '',
                        success: true,}
            };


        case "SET_FORM_INPUT":



            if(action.payload.name) {


                return {...state, contact: {name: action.payload.name, email: '', message: ''}};
            }

                //return state.contact.name = action.payload.name;
            // }else if(action.payload.email){
            //     return {...state,   contact: { email: action.payload.email}};
            // }
            //
            // else if(this.action.payload.message){
            //     return {...state,   contact: { message: action.payload.message}};
            //
            // }


            return {...state, }





    };
    return state

};

