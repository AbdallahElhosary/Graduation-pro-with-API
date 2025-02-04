'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, ArrowLeft } from 'lucide-react'

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email) {
            setError('Please enter your email address')
            return
        }
        console.log('Password reset requested for:', email)
        setIsSubmitted(true)
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6 mr-2" />
                <h1 className="text-xl font-bold">Academy Guide</h1>
            </header>
            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
                        <p className="text-center text-gray-500">Enter your email to reset your password</p>
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="mt-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        className="w-full border rounded-lg py-2 px-3 text-gray-700"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                                <button className="w-full mt-6 bg-blue-600 hover:text-white py-2 rounded-lg hover:bg-blue-700" type="submit">Reset Password</button>
                            </form>
                        ) : (
                            <div className="text-center space-y-4 mt-4">
                                <p className="text-green-600">Password reset link sent to your email!</p>
                                <p>Please check your inbox and follow the instructions to reset your password.</p>
                            </div>
                        )}
                        <div className="flex justify-center mt-4">
                            <a href="/auth" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Login
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}