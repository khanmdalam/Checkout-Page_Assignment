import React from 'react'

/**
 * InputField – labeled text input with optional badge
 * @param {string} label - field label
 * @param {string} id - input id (links label)
 * @param {string} badge - optional badge text, e.g. "Optional"
 * @param {string} error - error message
 */
const InputField = ({
  label,
  id,
  badge,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  className = '',
  disabled = false,
  required = false,
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <div className="flex items-center gap-2">
          <label htmlFor={id} className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {label}
            {required && <span className="text-red-400 ml-0.5">*</span>}
          </label>
          {badge && (
            <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full border border-slate-200">
              {badge}
            </span>
          )}
        </div>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full px-3.5 py-2.5 text-sm text-slate-700 bg-white
          border rounded-lg outline-none transition-all duration-150
          placeholder:text-slate-400
          focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10
          hover:border-slate-300
          disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed
          ${error ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-slate-200'}
        `}
      />
      {error && (
        <p className="text-xs text-red-500 mt-0.5">{error}</p>
      )}
    </div>
  )
}

export default InputField
