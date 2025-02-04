import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Form, FormControl, FormCheck, FormLabel, FormSelect } from 'react-bootstrap';
import { X } from 'lucide-react';

const prerequisites = [
  { id: '1', code: 'CS101', name: 'Introduction to Programming' },
  { id: '2', code: 'CS201', name: 'Data Structures' },
  { id: '3', code: 'CS301', name: 'Algorithms' },
  { id: '4', code: 'MATH101', name: 'Calculus I' },
];

const departments = [
  { id: '1', name: 'Computer Science' },
  { id: '2', name: 'Information Technology' },
  { id: '3', name: 'Software Engineering' },
];

export default function AddCourseForm() {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseHours, setCourseHours] = useState('');
  const [selectedSemesters, setSelectedSemesters] = useState([]);
  const [selectedPrerequisites, setSelectedPrerequisites] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [isImportant, setIsImportant] = useState(false);
  const [error, setError] = useState('');

  const toggleSemester = (semester) => {
    setSelectedSemesters(prev =>
      prev.includes(semester)
        ? prev.filter(s => s !== semester)
        : [...prev, semester]
    );
  };

  const togglePrerequisite = (id) => {
    setSelectedPrerequisites(prev =>
      prev.includes(id)
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  const toggleDepartment = (id) => {
    setSelectedDepartments(prev =>
      prev.includes(id)
        ? prev.filter(d => d !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate hours input
    const hours = parseInt(courseHours);
    if (isNaN(hours) || hours <= 0) {
      setError('Please enter a valid number of hours');
      return;
    }

    console.log({
      courseName,
      courseCode,
      courseHours: hours,
      selectedSemesters,
      selectedPrerequisites,
      selectedDepartments,
      isImportant
    });
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <Card className="max-w-2xl mx-auto bg-white border-gray-300">
        <Card.Header>
          <Card.Title className="text-2xl">Add New Course</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <FormLabel>Course Name</FormLabel>
                <FormControl
                  type="text"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  placeholder="Enter course name"
                  required
                />
              </div>

              <div className="space-y-2">
                <FormLabel>Course Code</FormLabel>
                <FormControl
                  type="text"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                  placeholder="Enter course code"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <FormLabel>Number of Hours</FormLabel>
              <FormControl
                type="number"
                min="1"
                value={courseHours}
                onChange={(e) => setCourseHours(e.target.value)}
                className="w-full md:w-1/4"
                placeholder="Hours"
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <div className="space-y-2">
              <FormLabel>Semesters</FormLabel>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 8 }, (_, i) => i + 1).map((semester) => (
                  <motion.button
                    key={semester}
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleSemester(semester)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${selectedSemesters.includes(semester)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                      }`}
                  >
                    Semester {semester}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <FormLabel>Prerequisites</FormLabel>
              <FormSelect
                onChange={(e) => togglePrerequisite(e.target.value)}
              >
                <option value="">Select prerequisites</option>
                {prerequisites.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.code} - {course.name}
                  </option>
                ))}
              </FormSelect>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedPrerequisites.map((id) => {
                  const course = prerequisites.find(c => c.id === id);
                  return course ? (
                    <motion.div
                      key={id}
                      className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white"
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
                  ) : null;
                })}
              </div>
            </div>

            <div className="space-y-2">
              <FormLabel>Departments</FormLabel>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <motion.button
                    key={dept.id}
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleDepartment(dept.id)}
                    className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors ${selectedDepartments.includes(dept.id)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
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
              <FormCheck
                id="isImportant"
                checked={isImportant}
                onChange={(e) => setIsImportant(e.target.checked)}
                className="text-blue-500"
              />
              <FormLabel
                htmlFor="isImportant"
                className="text-sm mb-0 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                This course is important
              </FormLabel>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Add Course
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}