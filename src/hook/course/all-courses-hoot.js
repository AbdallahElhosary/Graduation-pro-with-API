import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/courseAction';

const AllCoursesPageHook = () => {
    const dispatch = useDispatch();

    const MatrialsPerPage = 2


    // Get All Matrials with limit
    useEffect(() => {
        dispatch(getAllCourses());
    }, [])
    // Select Category

    const courses = useSelector(state => state.courses.getAllCourses);

    



    return [courses]
}

export default AllCoursesPageHook


