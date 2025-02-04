'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function ResetPasswordPage() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const togglePasswordVisibility = () => setShowPassword(!showPassword)
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters long')
            return
        }
        console.log('Password reset:', password)
        setIsSubmitted(true)
    }

    const fadeIn = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100" >
            <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-center shadow-md">
                <h1 className="text-xl font-bold text-white">Academy Guide</h1>
            </header>
            <div className="flex-grow flex items-center justify-center px-4 py-12 ">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className='w-5/6 '>
                    <div className=" max-w-lg bg-white shadow-lg rounded-lg p-6 m-auto">
                        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
                        <p className="text-center text-gray-600">Enter your new password</p>
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="mt-4">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium">New Password</label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                className="w-full p-2 border rounded"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Confirm New Password</label>
                                        <div className="relative">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                                className="w-full p-2 border rounded"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                                onClick={toggleConfirmPasswordVisibility}
                                            >
                                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                    {error && <p className="text-sm text-red-500">{error}</p>}
                                </div>
                                <button className="w-full mt-6 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" type="submit">Reset Password</button>
                            </form>
                        ) : (
                            <div className="text-center mt-4">
                                <p className="text-green-600">Password reset successfully!</p>
                                <p>You can now log in with your new password.</p>
                            </div>
                        )}
                        <div className="text-center mt-4">
                            <a href="/auth" className="text-sm text-blue-500 hover:underline">Back to Login</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
