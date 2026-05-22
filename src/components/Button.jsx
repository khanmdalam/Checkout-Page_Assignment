import React from 'react'

/**
 * Button – reusable button component
 * @param {string} variant - 'primary' | 'secondary' | 'ghost' | 'danger'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} fullWidth - stretch to container width
 * @param {React.ReactNode} leftIcon - icon rendered before label
 * @param {React.ReactNode} rightIcon - icon rendered after label
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled = false,
  onClick,
  type = 'button',
}) => {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'text-white bg-brand-500 hover:bg-brand-600 active:bg-brand-700 focus:ring-brand-500/30',
    secondary: 'text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100 focus:ring-slate-200',
    ghost: 'text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:ring-slate-200',
    danger: 'text-red-600 bg-red-50 border border-red-100 hover:bg-red-100 focus:ring-red-200',
    upgrade: 'text-white bg-gradient-to-r from-violet-500 to-brand-500 hover:from-violet-600 hover:to-brand-600 focus:ring-violet-300 shadow-sm',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-sm',
    xl: 'px-6 py-3.5 text-base',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  )
}

export default Button
