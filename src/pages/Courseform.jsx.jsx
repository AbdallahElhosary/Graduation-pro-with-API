'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from 'lucide-react'

const prerequisites = [
  { id: '1', code: 'CS101', name: 'Introduction to Programming' },
  { id: '2', code: 'CS201', name: 'Data Structures' },
  { id: '3', code: 'CS301', name: 'Algorithms' },
  { id: '4', code: 'MATH101', name: 'Calculus I' },
]

const departments = [
  { id: '1', name: 'Computer Science' },
  { id: '2', name: 'Information Technology' },
  { id: '3', name: 'Software Engineering' },
]

export default function CourseForm() {
  const [courseName, setCourseName] = useState('')
  const [courseCode, setCourseCode] = useState('')
  const [courseHours, setCourseHours] = useState('')
  const [selectedSemesters, setSelectedSemesters] = useState([])
  const [selectedPrerequisites, setSelectedPrerequisites] = useState([])
  const [selectedDepartments, setSelectedDepartments] = useState([])
  const [isImportant, setIsImportant] = useState(false)
  const [error, setError] = useState('')

  const toggleSemester = (semester) => {
    setSelectedSemesters(prev => 
      prev.includes(semester) 
        ? prev.filter(s => s !== semester)
        : [...prev, semester]
    )
  }

  const togglePrerequisite = (id) => {
    setSelectedPrerequisites(prev => 
      prev.includes(id)
        ? prev.filter(p => p !== id)
        : [...prev, id]
    )
  }

  const toggleDepartment = (id) => {
    setSelectedDepartments(prev => 
      prev.includes(id)
        ? prev.filter(d => d !== id)
        : [...prev, id]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate hours input
    const hours = parseInt(courseHours)
    if (isNaN(hours) || hours <= 0) {
      setError('Please enter a valid number of hours')
      return
    }
    
    console.log({
      courseName,
      courseCode,
      courseHours: hours,
      selectedSemesters,
      selectedPrerequisites,
      selectedDepartments,
      isImportant
    })
    setError('')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Add New Course</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="courseName" className="text-gray-200">Course Name</Label>
                <Input
                  id="courseName"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Enter course name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="courseCode" className="text-gray-200">Course Code</Label>
                <Input
                  id="courseCode"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Enter course code"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="courseHours" className="text-gray-200">Number of Hours</Label>
              <Input
                id="courseHours"
                type="number"
                min="1"
                value={courseHours}
                onChange={(e) => setCourseHours(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white w-full md:w-1/4"
                placeholder="Hours"
                required
              />
              {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
            </div>

            <div className="space-y-2">
              <Label className="text-gray-200">Semesters</Label>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 8 }, (_, i) => i + 1).map((semester) => (
                  <motion.button
                    key={semester}
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleSemester(semester)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      selectedSemesters.includes(semester)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                    }`}
                  >
                    Semester {semester}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="prerequisites" className="text-gray-200">Prerequisites</Label>
              <Select
                onValueChange={(value) => togglePrerequisite(value)}
              >
                <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Select prerequisites" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  {prerequisites.map((course) => (
                    <SelectItem key={course.id} value={course.id} className="text-white">
                      {course.code} - {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedPrerequisites.map((id) => {
                  const course = prerequisites.find(c => c.id === id)
                  return course ? (
                    <motion.div
                      key={id}
                      className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-600 text-white"
                      whileTap={{ scale: 0.95 }}
                    >
                      {course.code}
                      <button
                        type="button"
                        onClick={() => togglePrerequisite(id)}
                        className="ml-2 focus:outline-none"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.div>
                  ) : null
                })}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-200">Departments</Label>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <motion.button
                    key={dept.id}
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleDepartment(dept.id)}
                    className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      selectedDepartments.includes(dept.id)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                    }`}
                  >
                    {dept.name}
                    {selectedDepartments.includes(dept.id) && (
                      <X className="ml-2 h-3 w-3" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="isImportant"
                checked={isImportant}
                onCheckedChange={(checked) => setIsImportant(checked)}
                className="bg-gray-700 border-gray-600 text-blue-600"
              />
              <Label
                htmlFor="isImportant"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
              >
                This course is important
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Add Course
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}