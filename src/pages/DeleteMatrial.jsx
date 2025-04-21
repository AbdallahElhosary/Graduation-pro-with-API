"use client"

import { useState } from "react"
import { Container, Form, Table, Button } from "react-bootstrap"
import { Search, Trash2 } from "lucide-react"

export default function DeleteMaterial() {
    const [searchTerm, setSearchTerm] = useState("")

    // Sample data for the materials
    const materials = [
        {
            id: 1,
            name: "Introduction to Computer Science",
            doctor: "Dr. Ahmed Hassan",
            code: "CS1245",
            links: {
                youtube: "#",
                drive: "#",
            },
        },
        {
            id: 2,
            name: "Data Structures and Algorithms",
            doctor: "Dr. Sarah Johnson",
            code: "CS2210",
            links: {
                youtube: "#",
                drive: "#",
            },
        },
        {
            id: 3,
            name: "Database Systems",
            doctor: "Dr. Mohammed Ali",
            code: "CS3310",
            links: {
                youtube: "#",
                drive: "#",
            },
        },
        {
            id: 4,
            name: "Software Engineering",
            doctor: "Dr. Lisa Wong",
            code: "CS4410",
            links: {
                youtube: "#",
                drive: "#",
            },
        },
    ]

    // Filter materials based on search term
    const filteredMaterials = materials.filter(
        (material) =>
            material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            material.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
            material.code.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const handleDelete = (id) => {
        console.log(`Deleting material with id: ${id}`)
        // Implement actual delete functionality here
    }

    return (
        <Container className="py-4">
            <h2 className="mb-4">Delete Material</h2>
            <div className="mb-4 position-relative">
                <Form.Control
                    type="text"
                    placeholder="Search by material name, code or doctor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="ps-4"
                />
                <Search className="position-absolute" style={{ top: "10px", left: "10px", color: "#6c757d" }} size={18} />
            </div>

            <div className="bg-light rounded p-3">
                <Table responsive hover className="mb-0">
                    <thead>
                        <tr>
                            <th>Material Name</th>
                            <th>Doctor Name</th>
                            <th>Code</th>
                            <th>Links</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMaterials.map((material) => (
                            <tr key={material.id}>
                                <td>{material.name}</td>
                                <td>{material.doctor}</td>
                                <td>{material.code}</td>
                                <td>
                                    <a href={material.links.youtube} className="text-decoration-none me-2" style={{ color: "#FF0000" }}>
                                        YouTube
                                    </a>
                                    <a href={material.links.drive} className="text-decoration-none" style={{ color: "#4285F4" }}>
                                        Drive
                                    </a>
                                </td>
                                <td className="text-end">
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDelete(material.id)}
                                        className="d-inline-flex align-items-center"
                                    >
                                        <Trash2 size={16} className="me-1" />
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}
