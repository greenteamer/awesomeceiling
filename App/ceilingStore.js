import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

// const initialState = {
// 	projectsState: {
// 		items: [
// 			{
// 				name: "Initial name in store"
// 			},
// 			{
// 				name: "Second initial name in store"
// 			}
// 		]
// 	}
// }

// function ceilingStore(state = initialState, action){
// 	switch (action.type){
// 		case 'ADD_PROJECT':
// 			// at first change projectsState object
// 			console.log("ceilingStore reduser in store start")
// 			let newProjectsState = Object.assign({}, state.projectsState, {
// 				items: state.projectsState.items.concat([{
// 					name: action.project,
// 				}])
// 			})
// 			// return new state object with fresh projectState 
// 			return Object.assign({}, state, newProjectsState)

// 		default:
// 			return state
// 	}
// }


const middleware = [/* ...your middleware (i.e. thunk) */];

export const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

// export default createStore(ceilingStore);