import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { Book, User, Youtube, FileText } from 'lucide-react'




const MatrailComponent = ({ id, name, description, instructor ,youtube,drive }) => {

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
      
              <motion.div
                  key={id}
                  variants={cardVariants}
                  whileHover="hover"
              >
                  <div
              className="h-full flex flex-col justify-between bg-white rounded-lg shadow-md p-4"
                      onMouseEnter={() => setHoveredCourse(id)}
                      onMouseLeave={() => setHoveredCourse(null)}
                  >
                      <div>
                          <h3 className="flex items-center text-lg font-semibold">
                              <Book className="w-5 h-5 mr-2" />
                              {name}
                          </h3>
                          <p className="text-gray-600 text-sm">{description}</p>
                      </div>
                      <motion.div
                          variants={instructorVariants}
                          initial="hidden"
                          animate={hoveredCourse === id ? "visible" : "hidden"}
                          className="flex items-center text-sm text-gray-500 mt-2"
                      >
                          <User className="w-4 h-4 mr-1" />
                          {instructor}
                      </motion.div>
                      <div className="flex flex-col sm:flex-row gap-2 mt-4">
                          <a href={youtube} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2 no-underline">
                              <button className="w-full flex items-center justify-center border p-2 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white">
                                  <Youtube className="w-4 h-4 mr-2" />
                                  YouTube
                              </button>
                          </a>
                          <a href={drive} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2 no-underline">
                              <button className="w-full flex items-center justify-center border p-2 rounded-lg text-green-600 hover:bg-green-600 hover:text-white">
                                  <FileText className="w-4 h-4 mr-2" />
                                  Drive
                              </button>
                          </a>
                      </div>
                  </div>
              </motion.div>
  )
}

export default MatrailComponent
