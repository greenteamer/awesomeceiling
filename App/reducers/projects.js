import {ADD_PROJECT} from '../actions';

const initialState = {
	items: [
		{name: "first project name"},
		{name: "second project name"}
	]
}

const projects = (state = initialState, action = {}) => {
	switch (action.type){
		case ADD_PROJECT:
			console.log("addProject dispatcher state: ", state);
			let newProjectsArray = state.items.concat(action.project)
			return Object.assign({}, state, {
				items: newProjectsArray
			})
		default:
			return state
	}
}


export default projects
