import MainTitle from '../components/MainTitle'
import { motion } from 'framer-motion'
import MatrailComponent from '../components/MatrailComponent'



export default function MatrialPage() {
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
                <MainTitle title="SC Department" color="blue" />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    <MatrailComponent
                        id={2}
                        name="HTML"
                        description="Master the HTML"
                        instructor="Elzero"
                        youtubeLink='https://www.youtube.com/watch?v=dummylink3'
                        driveLink='https://drive.google.com/file/d/dummylink3'
                    />

                    <MatrailComponent
                        id={1}
                        name="Web Design Fundamentals"
                        description="Master the principles of effective web design"
                        instructor="Ms. Emily Brown"
                        youtubeLink='https://www.youtube.com/watch?v=dummylink3'
                        driveLink='https://drive.google.com/file/d/dummylink3'
                    />

                    <MatrailComponent
                        id={1}
                        name="Web Design Fundamentals"
                        description="Master the principles of effective web design"
                        instructor="Ms. Emily Brown"
                        youtubeLink='https://www.youtube.com/watch?v=dummylink3'
                        driveLink='https://drive.google.com/file/d/dummylink3'
                    />




                </motion.div>

                <MainTitle title="AI Department" color="blue" />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <MatrailComponent
                        id={1}
                        name="Web Design Fundamentals"
                        description="Master the principles of effective web design"
                        instructor="Ms. Emily Brown"
                        youtubeLink='https://www.youtube.com/watch?v=dummylink3'
                        driveLink='https://drive.google.com/file/d/dummylink3'
                    />

                    <MatrailComponent
                        id={1}
                        name="Web Design Fundamentals"
                        description="Master the principles of effective web design"
                        instructor="Ms. Emily Brown"
                        youtubeLink='https://www.youtube.com/watch?v=dummylink3'
                        driveLink='https://drive.google.com/file/d/dummylink3'
                    />

                </motion.div>

                <MainTitle title="General" color="blue" />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <MatrailComponent
                        id={1}
                        name="Web Design Fundamentals"
                        description="Master the principles of effective web design"
                        instructor="Ms. Emily Brown"
                        youtubeLink='https://www.youtube.com/watch?v=dummylink3'
                        driveLink='https://drive.google.com/file/d/dummylink3'
                    />

                    <MatrailComponent
                        id={1}
                        name="Web Design Fundamentals"
                        description="Master the principles of effective web design"
                        instructor="Ms. Emily Brown"
                        youtubeLink='https://www.youtube.com/watch?v=dummylink3'
                        driveLink='https://drive.google.com/file/d/dummylink3'
                    />

                </motion.div>



            </main>
        </div>
    )
}