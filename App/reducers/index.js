import { combineReducers } from 'redux';
import routes from './routes';
import projects from './projects';
// ... other reducers

export default combineReducers({
  routes,
  projects
  // ... other reducers
});