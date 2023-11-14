import { ADD_FILE, DELETE_FILE } from "../actions/fileActions"

const initialState = {
    values: [ '_startup' ],
    selecting: '_startup'
}

export const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILE: {
            if (state.values.includes(action.payload)) {
                return {
                    values: [ ...state.values ],
                    selecting: action.payload
                }
            }
            return {
                values: [ action.payload, ...state.values ],
                selecting: action.payload
            }
        }
        case DELETE_FILE: {
            let selectingIndex = 0
            if (action.payload === state.values[ 0 ]) {
                selectingIndex = 1
            }
            return {
                values: [ ...state.values.filter((f) => f !== action.payload) ],
                selecting: state.values[ selectingIndex ]
            }
        }
        default: {
            return state
        }
    }
}