import {
	ADD_PROJECT,
} from '@constants';


export const addProjectAction = (project) => {
  return {
    type: ADD_PROJECT,
    project
  }
}
