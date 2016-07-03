export const ADD_PROJECT = 'ADD_PROJECT'


export const addProjectAction = (project) => {
  return {
    type: ADD_PROJECT,
    project
  }
}
