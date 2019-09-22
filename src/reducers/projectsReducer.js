"use strict";


//define books reducers
export const projectReducer=(state=[], action) => {

    switch (action.type) {
        case 'GET_PROJECTS':

            const isVim = (fruit)=> {
            return fruit.projectName === 'VIM';
        }
            const isAlc = (fruit)=> {
                return fruit.projectName === 'alc';
            }
            const vim = action.payload.find(isVim);
            const alc = action.payload.find(isAlc);
            const nextState= {...state}
            action.payload.forEach(project =>{
                nextState[project.projectName] = project;
            });

            //return nextState
            return [...action.payload]
            break
        case 'GET_ONE':
            return {...state,oneProjects:[action.payload]};


        case 'GET_HOME':
            console.log('payload', action.payload)


            const projectTwo = action.payload.find(isAlc);


            return {...state, projects: [...action.payload], projectOne: projectOne,
            projectTwo:projectTwo, projectThree: projectThree}

    }
    return state
}
