import { FaYoutubeSquare, FaGoogleDrive } from "react-icons/fa";
import MainTitle from "../components/MainTitle"; 
import AddMatrialsHook from "../hook/matrial/add-matrial-hook";
import { ToastContainer } from "react-toastify";



function AddCourseMaterial() {

    const [matrialName, matrialCode, matrialDoctor, matrialYoutLink, matrialDrivLink,
        onChangeName, onChangeCode, onChangeDoctor, onChangeYoutLink, onChangeDrivLink,
        onAddMatrial] = AddMatrialsHook()
    
    
    

    return (
        <div className="min-h-screen  flex-col bg-gray-100">
            <MainTitle title="Add Matrial" />
            
        <div className="flex justify-center items-center  bg-gray-100 w-5/6 m-auto py-4">
            <div className=" mx-auto bg-white p-6 rounded-2xl shadow-md w-5/6 ">
                    <form onSubmit={onAddMatrial}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Material Name</label>
                        <input
                            type="text"
                            name="materialName"
                            value={matrialName}
                                onChange={onChangeName}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter material name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Doctor Name</label>
                        <input
                            type="text"
                            name="doctorName"
                                value={matrialDoctor}
                                onChange={onChangeDoctor}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter doctor name"
                        />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Material Code</label>
                            <input
                                type="text"
                                name="Matrial Code"
                                value={matrialCode}
                                onChange={onChangeCode}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="CS1245"
                            />
                        </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">YouTube Link</label>
                        <div className="relative">
                            <FaYoutubeSquare className="absolute left-1 top-3 text-gray-500" />
                            <input
                                type="url"
                                name="youtubeLink"
                                    value={matrialYoutLink}
                                    onChange={onChangeYoutLink}
                                className="w-full p-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="https://www.youtube.com/..."
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Google Drive Link</label>
                        <div className="relative">
                            <FaGoogleDrive className="absolute left-1 top-3 text-gray-500" />
                            <input
                                type="url"
                                name="driveLink"
                                value={matrialDrivLink}
                                onChange={onChangeDrivLink}
                                className="w-full p-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="https://drive.google.com/..."
                            />
                        </div>
                    </div>
                        <button type="submit"  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                        Add Material
                    </button>
                </form>
            </div>
            </div>

            <ToastContainer />

        </div>

    );
}

export default AddCourseMaterial;