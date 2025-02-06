'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {  ArrowLeft } from 'lucide-react'
import MainButton from '../components/MainButton'

export default function EnterCodePage() {
    const [code, setCode] = useState(['', '', '', '', '', ''])
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')
    const inputs = useRef([])

    const handleChange = (index, value) => {
        if (value.length <= 1) {
            const newCode = [...code]
            newCode[index] = value
            setCode(newCode)
            if (value !== '' && index < 5) {
                inputs.current[index + 1]?.focus()
            }
        }
    }

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && code[index] === '') {
            inputs.current[index - 1]?.focus()
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const fullCode = code.join('')
        if (fullCode.length !== 6) {
            setError('Please enter a 6-digit code')
            return
        }
        console.log('Code submitted:', fullCode)
        setIsSubmitted(true)
    }

    useEffect(() => {
        inputs.current[0]?.focus()
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            
            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                        <h2 className="text-2xl font-bold text-center">Enter Verification Code</h2>
                        <p className="text-center text-gray-500">Enter the 6-digit code sent to your email</p>
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="mt-4">
                                <div className="flex justify-between">
                                    {code.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            inputMode="numeric"
                                            pattern="\d{1}"
                                            maxLength={1}
                                            className="w-12 h-12 border rounded-lg text-center text-2xl"
                                            value={digit}
                                            onChange={(e) => handleChange(index, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                            ref={(el) => (inputs.current[index] = el)}
                                            required
                                        />
                                    ))}
                                </div>
                                {error && <p className="text-sm text-red-500 text-center mt-2">{error}</p>}
                                <MainButton title="Verify Code" />
                            </form>
                        ) : (
                            <div className="text-center space-y-4 mt-4">
                                <p className="text-green-600">Code verified successfully!</p>
                                <p>You can now reset your password.</p>
                            </div>
                        )}
                        <div className="flex justify-center mt-4">
                            <a href="/auth/forgetPassword" className="flex items-center no-underline text-sm text-gray-600 hover:text-blue-600">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Forgot Password
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}