import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import {projectReducer} from './projectsReducer';
import {blogReducer} from './blogReducers';

export default combineReducers({
    projects:projectReducer,
    form: formReducer,
    posts:blogReducer
})