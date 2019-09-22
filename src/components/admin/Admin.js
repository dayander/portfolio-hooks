import React from 'react';


import AddPostForm from '../forms/addPostForm';
import ConnectedAddPostForm from '../forms/ConnectedAddPostForm';


export const Admin = ()=>{

    return(
        <div>
            <h1>Admin Area 1</h1>
            <ConnectedAddPostForm/>

        </div>
    )

};