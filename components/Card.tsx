'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface CardProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({
  children,
  header,
  footer,
  className = '',
  hover = true,
}: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg p-6 ${className}`}
      whileHover={hover ? { scale: 1.03, y: -4 } : {}}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {header && <div className="mb-4">{header}</div>}
      <div>{children}</div>
      {footer && <div className="mt-4 pt-4 border-t border-gray-100">{footer}</div>}
    </motion.div>
  )
}
