export const DELETE_FILE = 'DELETE_FILE'
export const ADD_FILE = 'ADD_FILE'


export const addFile = (file) => {
    return {
        type: ADD_FILE,
        payload: file
    }
}

export const deleteFile = (file) => {
    return {
        type: DELETE_FILE,
        payload: file
    }
}