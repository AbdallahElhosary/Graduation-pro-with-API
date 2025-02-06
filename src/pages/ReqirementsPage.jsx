'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, ChevronDown, ChevronUp } from 'lucide-react'
import MainTitle from '../components/MainTitle'

// Custom Components
const CustomCard = ({ children, className, onClick }) => (
  <div
    className={`bg-white rounded-lg shadow-lg flex flex-col cursor-pointer ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
)

const CustomCardHeader = ({ children }) => (
  <div className="p-6 border-b border-gray-200">
    {children}
  </div>
)

const CustomCardTitle = ({ children }) => (
  <h2 className="text-xl font-semibold flex items-center justify-between">
    {children}
  </h2>
)

const CustomCardContent = ({ children }) => (
  <div className="p-6 flex-grow">
    {children}
  </div>
)

const CustomCardDescription = ({ children }) => (
  <p className="text-sm text-gray-600">
    {children}
  </p>
)

const CustomButton = ({ children, onClick, className, variant = 'default' }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200'
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
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

const CustomLink = ({ href, children, className, target, rel }) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className={`text-blue-600 hover:text-blue-700 transition-colors duration-200 ${className}`}
  >
    {children}
  </a>
)

// Data
const requirements = [
  {
    id: 1,
    title: "Research Proposal",
    description: "A detailed outline of your proposed research project, including objectives, methodology, and expected outcomes.",
    paperLink: "https://example.com/research-proposal-template.pdf"
  },
  {
    id: 2,
    title: "Literature Review",
    description: "A comprehensive review of existing literature related to your research topic, identifying gaps and areas for further study.",
    paperLink: "https://example.com/literature-review-guide.pdf"
  },
  {
    id: 3,
    title: "Methodology Section",
    description: "A detailed description of the research methods you plan to use, including data collection and analysis techniques.",
    paperLink: "https://example.com/methodology-guidelines.pdf"
  },
  {
    id: 4,
    title: "Ethics Application",
    description: "An application detailing the ethical considerations of your research and how you plan to address them.",
    paperLink: "https://example.com/ethics-application-form.pdf"
  },
  {
    id: 5,
    title: "Progress Report",
    description: "A regular update on the progress of your research, including achievements, challenges, and next steps.",
    paperLink: "https://example.com/progress-report-template.pdf"
  },
  {
    id: 6,
    title: "Final Thesis",
    description: "The complete presentation of your research, including introduction, literature review, methodology, results, discussion, and conclusion.",
    paperLink: "https://example.com/thesis-structure-guide.pdf"
  }
]

export default function RequirementsPage() {
  const [expandedCard, setExpandedCard] = useState({ id: null, timestamp: 0 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  }

  useEffect(() => {
    if (expandedCard.id !== null) {
      const timer = setTimeout(() => {
        setExpandedCard(prev => ({ ...prev, id: null }))
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [expandedCard.timestamp])

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <MainTitle title="Academic Requirements" />
      <main className="flex-grow container mx-auto px-4 py-6">
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {requirements.map((req) => (
            <motion.div
              key={req.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <CustomCard
                onClick={() => {
                  const now = Date.now()
                  setExpandedCard(prev => 
                    prev.id === req.id ? { id: null, timestamp: now } : { id: req.id, timestamp: now }
                  )
                }}
              >
                <CustomCardHeader>
                  <CustomCardTitle>
                    <span className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      {req.title}
                    </span>
                    {expandedCard.id === req.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </CustomCardTitle>
                </CustomCardHeader>
                <CustomCardContent>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: expandedCard.id === req.id ? 1 : 0,
                      height: expandedCard.id === req.id ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <CustomCardDescription className="mb-4">{req.description}</CustomCardDescription>
                  </motion.div>
                  <CustomLink href={req.paperLink} target="_blank" rel="noopener noreferrer">
                    <CustomButton variant="outline" className="w-full mt-2">
                      View Requirement Paper
                    </CustomButton>
                  </CustomLink>
                </CustomCardContent>
              </CustomCard>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}