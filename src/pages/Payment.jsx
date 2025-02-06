'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CreditCard } from 'lucide-react'
import MainTitle from '../components/MainTitle'
import MainButton from '../components/MainButton'

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [amount, setAmount] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [fawryCode, setFawryCode] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!paymentMethod) {
      setError('Please select a payment method')
      return
    }

    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      setError('Please enter a valid amount')
      return
    }

    if (paymentMethod === 'visa') {
      if (!cardNumber || !expiryDate || !cvv) {
        setError('Please fill in all card details')
        return
      }
      // Add more specific validation for card details here
    }

    if (paymentMethod === 'fawry' && !fawryCode) {
      setError('Please enter the Fawry code')
      return
    }

    // Process payment here
    console.log({
      paymentMethod,
      amount,
      cardNumber,
      expiryDate,
      cvv,
      fawryCode
    })
    setError('')
    // Here you would typically send the data to your payment processing backend
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
    <div className="min-h-screen bg-gray-50 text-gray-900 ">
      <MainTitle title="Payment" />

      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        {/* Card Content */}
        <div className="p-6">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Amount Field */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-8 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount"
                  required
                />
              </div>
            </motion.div>

            {/* Payment Method Field */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700">
                Payment Method
              </label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="fawry"
                    name="paymentMethod"
                    value="fawry"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="fawry" className="text-sm text-gray-700">
                    Fawry
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="visa"
                    name="paymentMethod"
                    value="visa"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="visa" className="text-sm text-gray-700">
                    Visa
                  </label>
                </div>
              </div>
            </motion.div>

            {/* Visa Card Details */}
            {paymentMethod === 'visa' && (
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="space-y-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      id="cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Fawry Code Field */}
            {paymentMethod === 'fawry' && (
              <motion.div className="space-y-2" variants={itemVariants}>
                <label htmlFor="fawryCode" className="block text-sm font-medium text-gray-700">
                  Fawry Code
                </label>
                <input
                  id="fawryCode"
                  value={fawryCode}
                  onChange={(e) => setFawryCode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Fawry code"
                  required
                />
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div variants={itemVariants}>
                <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-md">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              
              <MainButton title="Pay Now" />
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
  )
}