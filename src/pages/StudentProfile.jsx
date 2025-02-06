import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import MainTitle from '../components/MainTitle';

const studentData = {
    name: "Ahmed Mohamed",
    studentId: "20210001",
    gpa: 3.75,
    credits: 18,
    overallGrade: "Excellent",
    subjects: [
        { name: "Advanced Programming", grade: "A", credits: 4 },
        { name: "Database Systems", grade: "A-", credits: 3 },
        { name: "Computer Networks", grade: "B+", credits: 3 },
        { name: "Artificial Intelligence", grade: "A", credits: 4 },
        { name: "Software Engineering", grade: "B", credits: 4 },
    ],
};

export default function StudentProfile() {
    return (
        <div className="min-h-screen flex flex-col  text-gray-900">
            <MainTitle title="First Semester 2024-2023" /> 
            <main className="container mx-auto px-4 py-6">
                <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">{studentData.name}</h2>
                        <p className="text-sm">Student ID: {studentData.studentId}</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 bg-white shadow rounded-lg text-center">
                        <p className="text-gray-500">GPA</p>
                        <p className="text-2xl font-bold">{studentData.gpa}</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg text-center">
                        <p className="text-gray-500">Credits</p>
                        <p className="text-2xl font-bold">{studentData.credits}</p>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg text-center">
                        <p className="text-gray-500">Overall Grade</p>
                        <p className="text-2xl font-bold">{studentData.overallGrade}</p>
                    </div>
                </div>
                <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-4">Result Details</h3>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 text-center ">Credits</th>
                                <th className="p-2 text-center">Grade</th>
                                <th className="p-2 text-center">Subject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentData.subjects.map((subject, index) => (
                                <tr key={index} className="border-t">
                                    <td className="p-2 text-center">{subject.credits}</td>
                                    <td className="p-2 text-center ">
                                        {subject.grade}
                                    </td>
                                    <td className="p-2 text-center">{subject.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}