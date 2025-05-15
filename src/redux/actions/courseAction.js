import { useGetData } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { ADD_COURSE, GET_ALL_COURSES, GET_ERROR } from "../type";

// Action to get all Courses
export const getAllCourses= () => async (dispatch) => {
    try {
        const response = await useGetData(`/api/Course/GetAllCourses`);
        dispatch({
            type: GET_ALL_COURSES,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}


// funciton to Add Course
export const addCourse = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Course/DashBoard/AddCourse`, data);
        dispatch({
            type: ADD_COURSE,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response
        })
    }
}
