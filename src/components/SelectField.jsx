import React from 'react'
import { ChevronDown } from 'lucide-react'

/**
 * SelectField – labeled select dropdown
 */
const SelectField = ({
  label,
  id,
  badge,
  options = [],
  value,
  onChange,
  placeholder = 'Select...',
  error,
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
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full px-3.5 py-2.5 pr-9 text-sm bg-white
            border rounded-lg outline-none appearance-none transition-all duration-150
            focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10
            hover:border-slate-300
            disabled:bg-slate-50 disabled:cursor-not-allowed
            ${!value ? 'text-slate-400' : 'text-slate-700'}
            ${error ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-slate-200'}
          `}
        >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown
          size={15}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
      </div>
      {error && (
        <p className="text-xs text-red-500 mt-0.5">{error}</p>
      )}
    </div>
  )
}

export default SelectField
