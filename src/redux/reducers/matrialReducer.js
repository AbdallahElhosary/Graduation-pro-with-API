import { GET_ALL_MATRIAL, ADD_MATRIAL, DELETE_MATRIAL } from '../type'

const inital = {
    getAllMatrial: [],
}
const matrialReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_MATRIAL:
            return {
                ...state,
                getAllMatrial: action.payload,
            }
        case ADD_MATRIAL:
            return {
                ...state,
                addMatrial: action.payload,
                loading: false,
            }
        
        case DELETE_MATRIAL:
            return {
                ...state,
                delteMatrial: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
export default matrialReducer