import React from 'react';



export const PageTitle = (title) =>{
        document.title = title;

};

export const Icon = (props) => {

    return(
        <img className='icon' src={props.img} alt={props.alt} />


    )
};


export const setFocus = () => {
    window.scrollTo(0, 0);
    document.getElementById('app').focus();
}