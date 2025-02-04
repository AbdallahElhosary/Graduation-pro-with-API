'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, AlertCircle, UserPlus } from 'lucide-react'

// Custom Components
const CustomCard = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
)

const CustomCardHeader = ({ children }) => (
  <div className="p-6 border-b border-gray-200">
    {children}
  </div>
)

const CustomCardTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold text-gray-800">
    {children}
  </h2>
)

const CustomCardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">
    {children}
  </p>
)

const CustomCardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
)

const CustomButton = ({ children, onClick, className, variant = 'default' }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200'
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  }
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

const CustomInput = ({ value, onChange, placeholder, className }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
)

const CustomLabel = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
    {children}
  </label>
)

const CustomAlert = ({ children, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-blue-50 text-blue-700',
    destructive: 'bg-red-50 text-red-700',
  }
  return (
    <div className={`p-4 rounded-md ${variantStyles[variant]}`}>
      {children}
    </div>
  )
}

const CustomAlertTitle = ({ children }) => (
  <h3 className="font-medium">
    {children}
  </h3>
)

const CustomAlertDescription = ({ children }) => (
  <p className="text-sm">
    {children}
  </p>
)

const CustomDialog = ({ open, onOpenChange, children }) => (
  open && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        {children}
      </div>
    </div>
  )
)

const CustomDialogHeader = ({ children }) => (
  <div className="p-6 border-b border-gray-200">
    {children}
  </div>
)

const CustomDialogTitle = ({ children }) => (
  <h3 className="text-xl font-semibold text-gray-800">
    {children}
  </h3>
)

const CustomDialogDescription = ({ children }) => (
  <p className="text-sm text-gray-500">
    {children}
  </p>
)

const CustomDialogContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
)

const CustomDialogTrigger = ({ children, className }) => (
  <div className={`cursor-pointer ${className}`}>
    {children}
  </div>
);

const CustomDialogFooter = ({ children }) => (
  <div className="p-6 border-t border-gray-200 flex justify-end space-x-2">
    {children}
  </div>
)

export default function AdminManagementPage() {
  const [admins, setAdmins] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ])
  const [newAdmin, setNewAdmin] = useState({ name: '', email: '' })
  const [error, setError] = useState(null)
  const [adminToDelete, setAdminToDelete] = useState(null)

  const addAdmin = (e) => {
    e.preventDefault()
    if (newAdmin.name && newAdmin.email) {
      if (admins.some(admin => admin.email === newAdmin.email)) {
        setError('An admin with this email already exists.')
        return
      }
      setAdmins([...admins, { ...newAdmin, id: Date.now().toString() }])
      setNewAdmin({ name: '', email: '' })
      setError(null)
    } else {
      setError('Please fill in both name and email fields.')
    }
  }

  const deleteAdmin = () => {
    if (adminToDelete) {
      setAdmins(admins.filter(admin => admin.id !== adminToDelete.id))
      setAdminToDelete(null)
    }
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex-grow container mx-auto px-4 py-12 max-w-2xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-bold mb-8 text-center text-gray-800"
            variants={itemVariants}
          >
            Admin Management
          </motion.h1>
          <motion.div variants={itemVariants}>
            <CustomCard className="mb-8">
              <CustomCardHeader>
                <CustomCardTitle>Add New Admin</CustomCardTitle>
                <CustomCardDescription>Enter the details of the new admin</CustomCardDescription>
              </CustomCardHeader>
              <CustomCardContent>
                <form onSubmit={addAdmin} className="space-y-4">
                  <div className="space-y-2">
                    <CustomLabel htmlFor="admin-name">Name</CustomLabel>
                    <CustomInput
                      id="admin-name"
                      value={newAdmin.name}
                      onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                      placeholder="Enter admin name"
                    />
                  </div>
                  <div className="space-y-2">
                    <CustomLabel htmlFor="admin-email">Email</CustomLabel>
                    <CustomInput
                      id="admin-email"
                      type="email"
                      value={newAdmin.email}
                      onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                      placeholder="Enter admin email"
                    />
                  </div>
                  <CustomButton type="submit" className="flex justify-center items-center w-full">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add Admin
                  </CustomButton>
                </form>
                {error && (
                  <CustomAlert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <CustomAlertTitle>Error</CustomAlertTitle>
                    <CustomAlertDescription>{error}</CustomAlertDescription>
                  </CustomAlert>
                )}
              </CustomCardContent>
            </CustomCard>
          </motion.div>
          <motion.div variants={itemVariants}>
            <CustomCard>
              <CustomCardHeader>
                <CustomCardTitle>Existing Admins</CustomCardTitle>
                <CustomCardDescription>Manage your current admin users</CustomCardDescription>
              </CustomCardHeader>
              <CustomCardContent>
                <AnimatePresence>
                  {admins.map((admin) => (
                    <motion.div
                      key={admin.id}
                      className="flex justify-between items-center p-4 bg-white rounded-lg shadow mb-4 hover:shadow-md transition-shadow duration-200"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <div>
                        <h3 className="font-medium text-gray-800">{admin.name}</h3>
                        <p className="text-sm text-gray-500">{admin.email}</p>
                      </div>
                      <CustomDialog open={!!adminToDelete} onOpenChange={() => setAdminToDelete(null)}>
                        <CustomDialogTrigger>
                          <CustomButton
                            variant="destructive"
                            onClick={() => setAdminToDelete(admin)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </CustomButton>
                        </CustomDialogTrigger>
                        <CustomDialogContent>
                          <CustomDialogHeader>
                            <CustomDialogTitle>Confirm Deletion</CustomDialogTitle>
                            <CustomDialogDescription>
                              Are you sure you want to delete the admin {admin.name}?
                            </CustomDialogDescription>
                          </CustomDialogHeader>
                          <CustomDialogFooter>
                            <CustomButton variant="outline" onClick={() => setAdminToDelete(null)}>Cancel</CustomButton>
                            <CustomButton variant="destructive" onClick={deleteAdmin}>Delete</CustomButton>
                          </CustomDialogFooter>
                        </CustomDialogContent>
                      </CustomDialog>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {admins.length === 0 && (
                  <p className="text-center text-gray-500">No admins found. Add some above!</p>
                )}
              </CustomCardContent>
            </CustomCard>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}