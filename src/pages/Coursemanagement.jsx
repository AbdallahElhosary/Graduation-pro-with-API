'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pencil, Trash2, Plus, Search } from 'lucide-react'
import MainTitle from '../components/MainTitle'

// Custom Components
const CustomCard = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
)

const CustomCardHeader = ({ children }) => (
  <div className="p-6 border-b border-gray-200">
    {children}
  </div>
)

const CustomCardTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold text-gray-800">
    {children}
  </h2>
)

const CustomCardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">
    {children}
  </p>
)

const CustomCardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
)

const CustomButton = ({ children, onClick, className, variant = 'default' }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 flex'
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  }
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

const CustomInput = ({ value, onChange, placeholder, className }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
)

const CustomLabel = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
    {children}
  </label>
)

const CustomDialog = ({ open, onOpenChange, children }) => (
  open && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {children}
      </div>
    </div>
  )
)

const CustomDialogHeader = ({ children }) => (
  <div className="p-6 border-b border-gray-200">
    {children}
  </div>
)

const CustomDialogTitle = ({ children }) => (
  <h3 className="text-xl font-semibold text-gray-800">
    {children}
  </h3>
)

const CustomDialogDescription = ({ children }) => (
  <p className="text-sm text-gray-500">
    {children}
  </p>
)

const CustomDialogContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
)

const CustomDialogFooter = ({ children }) => (
  <div className="p-6 border-t border-gray-200 flex justify-end space-x-2">
    {children}
  </div>
)

export default function CourseManagementPage() {
  const [courses, setCourses] = useState([
    { id: '1', name: 'Introduction to Computer Science', code: 'CS101' },
    { id: '2', name: 'Data Structures and Algorithms', code: 'CS201' },
    { id: '3', name: 'Database Systems', code: 'CS301' },
  ])
  const [newCourse, setNewCourse] = useState({ id: '', name: '', code: '' })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingCourse, setEditingCourse] = useState(null)
  const [deletingCourse, setDeletingCourse] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCourses, setFilteredCourses] = useState(courses)

  useEffect(() => {
    const filtered = courses.filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCourses(filtered)
  }, [searchTerm, courses])

  const addCourse = () => {
    if (newCourse.name && newCourse.code) {
      setCourses([...courses, { ...newCourse, id: Date.now().toString() }])
      setNewCourse({ id: '', name: '', code: '' })
      setIsAddDialogOpen(false)
    }
  }

  const updateCourse = () => {
    if (editingCourse) {
      setCourses(courses.map(course =>
        course.id === editingCourse.id ? editingCourse : course
      ))
      setEditingCourse(null)
    }
  }

  const deleteCourse = () => {
    if (deletingCourse) {
      setCourses(courses.filter(course => course.id !== deletingCourse.id))
      setDeletingCourse(null)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
          <MainTitle title="Courses Management" />
      <main className="flex-grow container mx-auto px-4 py-6 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex gap-4">
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <CustomInput
                  id="search-courses"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search courses..."
                  className="pl-10 w-full h-fit"
                />
              </div>
            </div>
            <CustomButton onClick={() => setIsAddDialogOpen(true)} className="m-auto h-fit">Add New Course</CustomButton>
          </motion.div>
          <motion.div variants={itemVariants}>
            <CustomCard>
              <CustomCardHeader>
                <CustomCardTitle>Course List</CustomCardTitle>
                <CustomCardDescription>Manage your courses</CustomCardDescription>
              </CustomCardHeader>
              <CustomCardContent>
                <AnimatePresence>
                  {filteredCourses.map((course) => (
                    <motion.div
                      key={course.id}
                      className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4 hover:shadow-md transition-shadow duration-200"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <div>
                        <h3 className="font-medium text-gray-800">{course.name}</h3>
                        <p className="text-sm text-gray-500">{course.code}</p>
                      </div>
                      <div className="space-x-2 flex">
                        <CustomButton
                          variant="outline"
                          onClick={() => setEditingCourse(course)}
                        >
                          <Pencil className="h-4 w-4" />
                        </CustomButton>
                        <CustomButton
                          variant="destructive"
                          onClick={() => setDeletingCourse(course)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </CustomButton>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {filteredCourses.length === 0 && (
                  <p className="text-center text-gray-500">No courses found. Try a different search or add a new course!</p>
                )}
              </CustomCardContent>
            </CustomCard>
          </motion.div>
        </motion.div>
      </main>

      {/* Add Course Dialog */}
      <CustomDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <CustomDialogHeader>
          <CustomDialogTitle>Add New Course</CustomDialogTitle>
          <CustomDialogDescription>Enter the details of the new course</CustomDialogDescription>
        </CustomDialogHeader>
        <CustomDialogContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <CustomLabel htmlFor="course-name">Course Name</CustomLabel>
              <CustomInput
                id="course-name"
                value={newCourse.name}
                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                placeholder="Enter course name"
              />
            </div>
            <div className="space-y-2">
              <CustomLabel htmlFor="course-code">Course Code</CustomLabel>
              <CustomInput
                id="course-code"
                value={newCourse.code}
                onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })}
                placeholder="Enter course code"
              />
            </div>
          </div>
        </CustomDialogContent>
        <CustomDialogFooter>
          <CustomButton onClick={addCourse}>Add Course</CustomButton>
        </CustomDialogFooter>
      </CustomDialog>

      {/* Edit Course Dialog */}
      {editingCourse && (
        <CustomDialog open={!!editingCourse} onOpenChange={() => setEditingCourse(null)}>
          <CustomDialogHeader>
            <CustomDialogTitle>Edit Course</CustomDialogTitle>
            <CustomDialogDescription>Update the course details</CustomDialogDescription>
          </CustomDialogHeader>
          <CustomDialogContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <CustomLabel htmlFor="edit-course-name">Course Name</CustomLabel>
                <CustomInput
                  id="edit-course-name"
                  value={editingCourse.name}
                  onChange={(e) => setEditingCourse({ ...editingCourse, name: e.target.value })}
                  placeholder="Enter course name"
                />
              </div>
              <div className="space-y-2">
                <CustomLabel htmlFor="edit-course-code">Course Code</CustomLabel>
                <CustomInput
                  id="edit-course-code"
                  value={editingCourse.code}
                  onChange={(e) => setEditingCourse({ ...editingCourse, code: e.target.value })}
                  placeholder="Enter course code"
                />
              </div>
            </div>
          </CustomDialogContent>
          <CustomDialogFooter>
            <CustomButton onClick={updateCourse}>Update Course</CustomButton>
          </CustomDialogFooter>
        </CustomDialog>
      )}

      {/* Delete Course Dialog */}
      {deletingCourse && (
        <CustomDialog open={!!deletingCourse} onOpenChange={() => setDeletingCourse(null)}>
          <CustomDialogHeader>
            <CustomDialogTitle>Confirm Deletion</CustomDialogTitle>
            <CustomDialogDescription>
              Are you sure you want to delete the course {deletingCourse.name}?
            </CustomDialogDescription>
          </CustomDialogHeader>
          <CustomDialogFooter>
            <CustomButton variant="outline" onClick={() => setDeletingCourse(null)}>Cancel</CustomButton>
            <CustomButton variant="destructive" onClick={deleteCourse}>Delete</CustomButton>
          </CustomDialogFooter>
        </CustomDialog>
      )}
    </div>
  )
}