'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

const buttonVariants = {
  primary: {
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.98 },
  },
  secondary: {
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.98 },
  },
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'px-8 py-3 rounded-full font-semibold transition-smooth inline-block text-center'
  
  const variantClasses = {
    primary: disabled 
      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
      : 'gradient-primary text-white shadow-lg',
    secondary: disabled
      ? 'border-2 border-gray-300 text-gray-400 cursor-not-allowed'
      : 'border-2 border-primary-dark text-primary-dark bg-white',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  const motionProps = disabled
    ? {}
    : {
        whileHover: buttonVariants[variant].hover,
        whileTap: buttonVariants[variant].tap,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 17,
        },
      }

  if (href && !disabled) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
