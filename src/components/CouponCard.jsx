import React from 'react'
import { Tag } from 'lucide-react'

/**
 * CouponCard – selectable coupon option with radio button
 */
const CouponCard = ({
  code,
  description,
  discount,
  selected = false,
  onSelect,
}) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all duration-150
        ${selected
          ? 'border-brand-500 bg-brand-50/60 ring-1 ring-brand-500/20'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80'
        }
      `}
    >
      {/* Radio indicator */}
      <div className={`
        shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all
        ${selected ? 'border-brand-500' : 'border-slate-300'}
      `}>
        {selected && (
          <div className="w-2 h-2 rounded-full bg-brand-500" />
        )}
      </div>

      {/* Icon */}
      <div className={`
        shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
        ${selected ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-400'}
      `}>
        <Tag size={14} />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className={`text-sm font-semibold ${selected ? 'text-brand-700' : 'text-slate-700'}`}>
            {code}
          </span>
          <span className={`text-xs font-bold ${selected ? 'text-brand-600' : 'text-emerald-600'}`}>
            {discount}
          </span>
        </div>
        {description && (
          <p className="text-xs text-slate-400 mt-0.5 truncate">{description}</p>
        )}
      </div>
    </button>
  )
}

export default CouponCard
