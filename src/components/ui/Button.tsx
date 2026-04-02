import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaLabel?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer'

  const variants: Record<string, string> = {
    primary:   'bg-secondary text-white hover:bg-[#0d87be] shadow-lg shadow-secondary/25',
    secondary: 'bg-primary text-white hover:bg-[#15305a] shadow-lg shadow-primary/25',
    outline:   'border-2 border-white text-white hover:bg-white hover:text-primary',
    ghost:     'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
  }

  const sizes: Record<string, string> = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-60 cursor-not-allowed' : ''
  } ${className}`

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault()
      const id = href.replace('#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    onClick?.()
  }

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.04 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={classes}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  )
}
