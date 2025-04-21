import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMatrial } from "../../redux/actions/matrialAction";
import notify from "../useNotify";

const DelteMatrialHook = ({id}) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)

    const [showDelete, setShowDelete] = useState(false);
    // Two Funs to handle close and open modal
    const handleClose = () => setShowDelete(false);
    const handleShow = () => setShowDelete(true);
    // getting user
    
    
    // on delection function

    const onDelete = async () => {
        setLoading(true)
        await dispatch(deleteMatrial(id))
        setLoading(false)
        handleClose();
    }

    const res = useSelector(state => state.allMatrail.delteMatrial);


    useEffect(() => {
        if (loading === false) {
            if (res === "") {
                notify("Review Deleted Successfully", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
            else {
                notify("Deletion Error", "error")
            }
        }
    }, [loading])

    return [onDelete, handleClose, handleShow, showDelete]
}

export default DelteMatrialHook
