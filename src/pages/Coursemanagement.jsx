"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Form, InputGroup, Button, Badge, Pagination } from "react-bootstrap"
import { Search, BookOpen, Users, Clock, Calendar, Filter, SortAsc, SortDesc } from "lucide-react"
import AllCoursesPageHook from "../hook/course/all-courses-hoot"

// Sample course data
const coursesData = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    instructor: "Dr. Alan Turing",
    credits: 3,
    schedule: "Mon, Wed 10:00 - 11:30 AM",
    semester: "Fall 2023",
    department: "Computer Science",
    available: true,
    description:
      "An introductory course covering the basics of computer science, programming fundamentals, and algorithmic thinking.",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    instructor: "Dr. Katherine Johnson",
    credits: 4,
    schedule: "Tue, Thu 1:00 - 2:30 PM",
    semester: "Fall 2023",
    department: "Mathematics",
    available: true,
    description:
      "Continuation of Calculus I, covering integration techniques, applications of integration, and infinite series.",
  },
  {
    id: 3,
    code: "PHYS150",
    name: "Physics for Engineers",
    instructor: "Dr. Richard Feynman",
    credits: 4,
    schedule: "Mon, Wed, Fri 9:00 - 10:00 AM",
    semester: "Fall 2023",
    department: "Physics",
    available: false,
    description: "A comprehensive introduction to classical mechanics and thermodynamics for engineering students.",
  },
  {
    id: 4,
    code: "ENG102",
    name: "Academic Writing",
    instructor: "Prof. Jane Austen",
    credits: 3,
    schedule: "Tue, Thu 11:00 AM - 12:30 PM",
    semester: "Fall 2023",
    department: "English",
    available: true,
    description:
      "Develops skills in academic writing, critical reading, and research methods for university-level assignments.",
  },
  {
    id: 5,
    code: "BIO110",
    name: "Introduction to Biology",
    instructor: "Dr. Rosalind Franklin",
    credits: 4,
    schedule: "Mon, Wed 2:00 - 3:30 PM",
    semester: "Fall 2023",
    department: "Biology",
    available: true,
    description: "Explores fundamental biological concepts including cell structure, genetics, evolution, and ecology.",
  },
  {
    id: 6,
    code: "CHEM101",
    name: "General Chemistry",
    instructor: "Dr. Marie Curie",
    credits: 4,
    schedule: "Tue, Thu 3:00 - 4:30 PM",
    semester: "Fall 2023",
    department: "Chemistry",
    available: true,
    description: "Introduction to the fundamental principles of chemistry, atomic structure, and chemical reactions.",
  },

  {
    id: 4,
    code: "ENG102",
    name: "Academic Writing",
    instructor: "Prof. Jane Austen",
    credits: 3,
    schedule: "Tue, Thu 11:00 AM - 12:30 PM",
    semester: "Fall 2023",
    department: "English",
    available: true,
    description:
      "Develops skills in academic writing, critical reading, and research methods for university-level assignments.",
  },
  {
    id: 5,
    code: "BIO110",
    name: "Introduction to Biology",
    instructor: "Dr. Rosalind Franklin",
    credits: 4,
    schedule: "Mon, Wed 2:00 - 3:30 PM",
    semester: "Fall 2023",
    department: "Biology",
    available: true,
    description: "Explores fundamental biological concepts including cell structure, genetics, evolution, and ecology.",
  },
  {
    id: 6,
    code: "CHEM101",
    name: "General Chemistry",
    instructor: "Dr. Marie Curie",
    credits: 4,
    schedule: "Tue, Thu 3:00 - 4:30 PM",
    semester: "Fall 2023",
    department: "Chemistry",
    available: true,
    description: "Introduction to the fundamental principles of chemistry, atomic structure, and chemical reactions.",
  },
]

// Department filter options
const departments = ["All Departments", "Computer Science", "Mathematics", "Physics", "English", "Biology", "Chemistry"]

const CourseManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [sortDirection, setSortDirection] = useState("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 4


  const [courses] = AllCoursesPageHook()

  console.log(courses)
  // Filter courses based on search term and department
  const filteredCourses = coursesData?.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = selectedDepartment === "All Departments" || course.department === selectedDepartment

    return matchesSearch && matchesDepartment
  })

  // Sort courses by name
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortDirection === "asc") {
      return a.name.localeCompare(b.name)
    } else {
      return b.name.localeCompare(a.name)
    }
  })

  // Pagination
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse)
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
  }

  return (
    <Container className="py-5">
      {/* Header Section */}
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 mb-0">University Courses</h1>
          <p className="lead text-muted">Browse and discover courses for the current semester</p>
        </Col>
      </Row>

      {/* Search and Filter Section */}
      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <InputGroup>
            <InputGroup.Text>
              <Search size={18} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search by course name, code, or instructor"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={4}>
          <InputGroup>
            <InputGroup.Text>
              <Filter size={18} />
            </InputGroup.Text>
            <Form.Select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </Form.Select>
          </InputGroup>
        </Col>
        <Col md={2}>
          <Button
            variant="outline-secondary"
            className="w-100 d-flex align-items-center justify-content-center"
            onClick={toggleSortDirection}
          >
            {sortDirection === "asc" ? (
              <>
                Sort <SortAsc size={18} className="ms-2" />
              </>
            ) : (
              <>
                Sort <SortDesc size={18} className="ms-2" />
              </>
            )}
          </Button>
        </Col>
      </Row>

      {/* My Course */}
      <Row>
        {courses?.length > 0 && (
          courses.map((course) => (
            <Col md={6} className="mb-4" key={course.id}>
              <Card className="h-100 shadow-sm">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">{course.code}</span>
                  {course.available ? <Badge bg="success">Available</Badge> : <Badge bg="danger">Full</Badge>}
                </Card.Header>
                <Card.Body>
                  <Card.Title>{course.nameOfCourse}</Card.Title>
                  <Card.Text className="text-muted mb-3">Develops skills in academic writing, critical reading, and research methods for university-level assignments.</Card.Text>

                  <div className="d-flex align-items-center mb-2">
                    <Users size={16} className="me-2 text-primary" />
                    <small>Tamer</small>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <Clock size={16} className="me-2 text-primary" />
                    <small>{new Date(Date.now()).toLocaleDateString('ar-EG', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}</small>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <BookOpen size={16} className="me-2 text-primary" />
                    <small>{course.semesters} Credits</small>
                  </div>

                  <div className="d-flex align-items-center">
                    <Calendar size={16} className="me-2 text-primary" />
                    <small>{course.semesters} Semester</small>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white">
                  
                  {
                    course.departmentIds?.map((dept) => {
                    return (
                      <Badge bg="light" text="dark" className="me-2">
                        {dept}
                      </Badge>
                    )
                    })
                  }
                  
                  <Button variant="primary" size="sm">
                    Enroll
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}

      </Row>

      {/* Courses Grid */}
      <Row>
        {currentCourses.length > 0 ? (
          currentCourses.map((course) => (
            <Col md={6} className="mb-4" key={course.id}>
              <Card className="h-100 shadow-sm">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">{course.code}</span>
                  {course.available ? <Badge bg="success">Available</Badge> : <Badge bg="danger">Full</Badge>}
                </Card.Header>
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text className="text-muted mb-3">{course.description}</Card.Text>

                  <div className="d-flex align-items-center mb-2">
                    <Users size={16} className="me-2 text-primary" />
                    <small>{course.instructor}</small>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <Clock size={16} className="me-2 text-primary" />
                    <small>{course.schedule}</small>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <BookOpen size={16} className="me-2 text-primary" />
                    <small>{course.credits} Credits</small>
                  </div>

                  <div className="d-flex align-items-center">
                    <Calendar size={16} className="me-2 text-primary" />
                    <small>{course.semester}</small>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white">
                  <Badge bg="light" text="dark" className="me-2">
                    {course.department}
                  </Badge>
                  <Button variant="primary" size="sm">
                    Enroll
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center py-5">
            <h4>No courses match your search criteria</h4>
            <p>Try adjusting your search or filters</p>
          </Col>
        )}
      </Row>

      {/* Pagination */}
      {sortedCourses.length > coursesPerPage && (
        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />

              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}

              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </Col>
        </Row>
      )}

      {/* Summary */}
      <Row className="mt-4">
        <Col>
          <p className="text-muted">
            Showing {currentCourses.length} of {sortedCourses.length} courses
            {selectedDepartment !== "All Departments" && ` in ${selectedDepartment}`}
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default CourseManagementPage
