import React from 'react';



export const projectOverview = (props) =>{


    const {projectDescription, techUsed, role, projectLinks} = props;


    const techUsedMapped = techUsed.map((tech, i)=>{

       return(
           <li key={i}>
               {tech}
           </li>
       )
    });


    const projectLinksMapped = projectLinks.map((link, i)=>{

        return (
            <li>
                <a href={link.url} >{link.text}</a>

            </li>
        )

    });



    return(
        <div className={'white custom-well'}>
            <Jumbotron className={'project-overview'}>
                <div className={'container'}>
                    <h2>Project Overview</h2>



                    <h3>Project Description: </h3>
                    <p>{projectDescription}</p>



                    <h3>Technologies Used: </h3>
                    <ul>
                        {techUsedMapped}
                    </ul>


                    <h3>Project Role: </h3>
                    <p>{role}</p>

                    <h3>Live Project Links </h3>

                    <ul>
                        {projectLinksMapped}
                    </ul>



                </div>
            </Jumbotron>
        </div>
    )

};