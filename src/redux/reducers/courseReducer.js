import { GET_ALL_COURSES, ADD_COURSE, DELETE_COURSE } from '../type'

const inital = {
    getAllMatrial: [],
}
const courseReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_COURSES:
            return {
                ...state,
                getAllCourses: action.payload,
            }
        case ADD_COURSE:
            return {
                ...state,
                addCourse: action.payload,
                loading: false,
            }
        
        case DELETE_COURSE:
            return {
                ...state,
                deleteCoure: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
export default courseReducer