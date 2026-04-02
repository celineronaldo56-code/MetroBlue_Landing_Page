import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => (
  <span className={`tag-pill ${className}`}>{children}</span>
)
