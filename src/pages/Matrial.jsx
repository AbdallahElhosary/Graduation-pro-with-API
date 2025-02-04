'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, User, Youtube, FileText } from 'lucide-react'

const courses = [
    {
        id: 1,
        name: "Introduction to React",
        description: "Learn the basics of React and build your first app",
        instructor: "Dr. Jane Smith",
        youtubeLink: 'https://www.youtube.com/watch?v=dummylink1',
        driveLink: 'https://drive.google.com/file/d/dummylink1'
    },
    {
        id: 2,
        name: "Advanced JavaScript",
        description: "Deep dive into JavaScript's advanced concepts",
        instructor: "Prof. John Doe",
        youtubeLink: 'https://www.youtube.com/watch?v=dummylink2',
        driveLink: 'https://drive.google.com/file/d/dummylink2'
    },
    {
        id: 3,
        name: "Web Design Fundamentals",
        description: "Master the principles of effective web design",
        instructor: "Ms. Emily Brown",
        youtubeLink: 'https://www.youtube.com/watch?v=dummylink3',
        driveLink: 'https://drive.google.com/file/d/dummylink3'
    },
    {
        id: 4,
        name: "Web Design Fundamentals",
        description: "Master the principles of effective web design",
        instructor: "Ms. Emily Brown",
        youtubeLink: 'https://www.youtube.com/watch?v=dummylink3',
        driveLink: 'https://drive.google.com/file/d/dummylink3'
    },
]

export default function MatrialPage() {
    const [hoveredCourse, setHoveredCourse] = useState(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        },
        hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)", transition: { duration: 0.3 } }
    }

    const instructorVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <main className="flex-grow container mx-auto px-4 py-12">
                <motion.h2
                    className="text-3xl font-bold mb-6 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Available Courses
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {courses.map((course) => (
                        <motion.div
                            key={course.id}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div
                                className="h-full flex flex-col bg-white rounded-lg shadow-md p-4"
                                onMouseEnter={() => setHoveredCourse(course.id)}
                                onMouseLeave={() => setHoveredCourse(null)}
                            >
                                <div>
                                    <h3 className="flex items-center text-lg font-semibold">
                                        <Book className="w-5 h-5 mr-2" />
                                        {course.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{course.description}</p>
                                </div>
                                <motion.div
                                    variants={instructorVariants}
                                    initial="hidden"
                                    animate={hoveredCourse === course.id ? "visible" : "hidden"}
                                    className="flex items-center text-sm text-gray-500 mt-2"
                                >
                                    <User className="w-4 h-4 mr-1" />
                                    {course.instructor}
                                </motion.div>
                                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                                    <a href={course.youtubeLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2 no-underline">
                                        <button className="w-full flex items-center justify-center border p-2 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white">
                                            <Youtube className="w-4 h-4 mr-2" />
                                            YouTube
                                        </button>
                                    </a>
                                    <a href={course.driveLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2 no-underline">
                                        <button className="w-full flex items-center justify-center border p-2 rounded-lg text-green-600 hover:bg-green-600 hover:text-white">
                                            <FileText className="w-4 h-4 mr-2" />
                                            Drive
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    )
}