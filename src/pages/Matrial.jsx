import MainTitle from '../components/MainTitle'
import { motion } from 'framer-motion'
import MatrailComponent from '../components/MatrailComponent'
import AllMatrialPageHook from '../hook/matrial/all-matrial-data';
import { Form } from 'react-bootstrap';
import { Search } from "lucide-react"
import Paginate from '../components/utils/Pagenation/Pagenation';


export default function MatrialPage() {
    
    const [, matrialPagentionAll, pageCount, getPagePagenta] = AllMatrialPageHook();


    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <MainTitle title="Available Matrial" />
            <main className="flex-grow container mx-auto px-4 ">
                
                <div className="mb-4 position-relative">
                    <Form.Control
                        type="text"
                        placeholder="Search by material name, code or doctor..."
                        // value={searchTerm}
                        // onChange={(e) => setSearchTerm(e.target.value)}
                        className="ps-4"
                    />
                    <Search className="position-absolute" style={{ top: "10px", left: "5px", color: "#6c757d" }} size={18} />
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {
                        matrialPagentionAll?.materials?.map((subj) => {
                            return (
                                
                                <MatrailComponent
                                    key={subj.id}
                                    name={subj.name}
                                    description="Master the principles of effective web design"
                                    instructor={subj.instructor}
                                    youtubeLink={subj.youtubeLink && subj.youtubeLink }
                                    driveLink={subj.driveLink && subj.driveLink }
                                />
                            )
                        }) 
                    }
                </motion.div>
            </main>
            {
                pageCount > 1 ? (
                    <Paginate pageCount={pageCount} onPress={getPagePagenta} />
                ) : null
            }


        </div>
    )
}