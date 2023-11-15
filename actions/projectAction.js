export const DELETE_PROJECT = 'DELETE_PROJECT'
export const ADD_PROJECT = 'ADD_PROJECT'


export const addProject = (project) => {
    return {
        type: ADD_PROJECT,
        payload: project
    }
}

export const deleteProject = (project) => {
    return {
        type: DELETE_PROJECT,
        payload: project
    }
}