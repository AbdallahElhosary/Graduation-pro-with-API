'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PlusCircle, Trash2, AlertCircle } from 'lucide-react'
import MainTitle from '../components/MainTitle'

const subjectOptions = [
  { id: '1', code: 'MATH101', name: 'Mathematics I', hours: 3, prerequisites: [] },
  { id: '2', code: 'PHYS101', name: 'Physics I', hours: 4, prerequisites: [] },
  { id: '3', code: 'COMP101', name: 'Introduction to Computer Science', hours: 3, prerequisites: [] },
  { id: '4', code: 'ENG101', name: 'English Composition', hours: 2, prerequisites: [] },
  { id: '5', code: 'HIST101', name: 'World History', hours: 3, prerequisites: [] },
  { id: '6', code: 'CHEM101', name: 'Chemistry I', hours: 4, prerequisites: [] },
  { id: '7', code: 'BIO101', name: 'Biology I', hours: 3, prerequisites: [] },
  { id: '8', code: 'ECON101', name: 'Principles of Economics', hours: 3, prerequisites: [] },
  { id: '9', code: 'MATH201', name: 'Mathematics II', hours: 3, prerequisites: ['MATH101'] },
  { id: '10', code: 'PHYS201', name: 'Physics II', hours: 4, prerequisites: ['PHYS101'] },
  { id: '11', code: 'COMP201', name: 'Data Structures', hours: 3, prerequisites: ['COMP101'] },
  { id: '12', code: 'CHEM201', name: 'Chemistry II', hours: 4, prerequisites: ['CHEM101'] },
]

export default function SubjectManagementPage() {
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [totalHours, setTotalHours] = useState(0)
  const [error, setError] = useState(null)
  const [recommendedSubjects, setRecommendedSubjects] = useState([])

  useEffect(() => {
    const newTotalHours = selectedSubjects.reduce((sum, subject) => sum + subject.hours, 0)
    setTotalHours(newTotalHours)
    if (newTotalHours > 18) {
      setError('Total hours cannot exceed 18')
    } else {
      setError(null)
    }

    // Update recommended subjects
    const selectedCodes = selectedSubjects.map(s => s.code)
    const newRecommendedSubjects = subjectOptions.filter(subject => 
      !selectedCodes.includes(subject.code) &&
      subject.prerequisites.every(prereq => selectedCodes.includes(prereq))
    )
    setRecommendedSubjects(newRecommendedSubjects)
  }, [selectedSubjects])

  const addSubject = (subjectId) => {
    const subjectToAdd = subjectOptions.find(s => s.id === subjectId)
    if (subjectToAdd && !selectedSubjects.some(s => s.id === subjectId)) {
      if (totalHours + subjectToAdd.hours <= 18) {
        setSelectedSubjects([...selectedSubjects, subjectToAdd])
      } else {
        setError('Adding this subject would exceed the 18-hour limit')
      }
    }
  }

  const removeSubject = (subjectId) => {
    setSelectedSubjects(selectedSubjects.filter(subject => subject.id !== subjectId))
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MainTitle title="Subject Selection" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Available Subjects</CardTitle>
                  <CardDescription>Select subjects for your semester (Max 18 hours)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="subject-select">Choose a subject:</Label>
                    <Select onValueChange={addSubject}>
                      <SelectTrigger id="subject-select">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjectOptions.map((subject) => (
                          <SelectItem key={subject.id} value={subject.id}>
                            {subject.code} - {subject.name} ({subject.hours} hours)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Selected Subjects</CardTitle>
                  <CardDescription>Total Hours: {totalHours} / 18</CardDescription>
                </CardHeader>
                <CardContent>
                  {error && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <ul className="space-y-2">
                    {selectedSubjects.map((subject) => (
                      <li key={subject.id} className="flex justify-between items-center">
                        <span>{subject.code} - {subject.name} ({subject.hours} hours)</span>
                        <Button variant="destructive" size="icon" onClick={() => removeSubject(subject.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Subjects</CardTitle>
                <CardDescription>Based on your current selection</CardDescription>
              </CardHeader>
              <CardContent>
                {recommendedSubjects.length > 0 ? (
                  <ul className="space-y-2">
                    {recommendedSubjects.map((subject) => (
                      <li key={subject.id} className="flex justify-between items-center">
                        <span>{subject.code} - {subject.name} ({subject.hours} hours)</span>
                        <Button variant="outline" size="sm" onClick={() => addSubject(subject.id)}>
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Add
                        </Button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No recommendations available based on your current selection.</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}