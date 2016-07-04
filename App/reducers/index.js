import { combineReducers } from 'redux';
import routes from './routes';
import projects from './projects';


export default combineReducers({
  routes,
  projects
});
