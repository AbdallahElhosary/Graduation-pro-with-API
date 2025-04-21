import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMatrial } from '../../redux/actions/matrialAction';

const AllMatrialPageHook = () => {
    const dispatch = useDispatch();

    // Get All Category with limit
    useEffect(() => {
        dispatch(getAllMatrial());
    }, [])
    // Select Category
    const matrial = useSelector(state => state.allMatrail.getAllMatrial);
    // Select Loading
    
    // Function to get the page
   

    return [matrial]
}

export default AllMatrialPageHook
