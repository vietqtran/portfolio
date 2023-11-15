import { ADD_PROJECT, DELETE_PROJECT } from "../actions/projectAction"

const initialState = {
    values: [],
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT: {
            if (state.values.includes(action.payload)) {
                return {
                    values: [ ...state.values.filter((p) => p !== action.payload) ]
                }
            }
            return {
                values: [ ...state.values, action.payload ]
            }
        }
        case DELETE_PROJECT: {
            return {
                values: state.values.filter((p) => p !== action.payload)
            }
        }
        default: {
            return state
        }
    }
}