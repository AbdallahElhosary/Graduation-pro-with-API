import MainTitle from '../components/MainTitle'
import { motion } from 'framer-motion'
import MatrailComponent from '../components/MatrailComponent'
import AllMatrialPageHook from '../hook/matrial/all-matrial-data';


export default function MatrialPage() {
    
    const [matrial] = AllMatrialPageHook();

    console.log(matrial)


    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <MainTitle title="Available Courses" />
            <main className="flex-grow container mx-auto px-4 ">

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    

                    {
                        matrial.map((subj) => {
                            return (
                                
                                <MatrailComponent
                                    key={subj.id}
                                    name={subj.name}
                                    description="Master the principles of effective web design"
                                    instructor={subj.instructor}
                                    // youtubeLink={subj.youtubeLink ? subj.youtubeLink : "disabled"}
                                    
                                    driveLink={subj.driveLink ? subj.driveLink : "disabled"}
                                />
                            )
                        })
                    }
                    
                                

                   




                
                    

                </motion.div>



            </main>
        </div>
    )
}