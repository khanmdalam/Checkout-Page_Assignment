
import React, { useState } from 'react'

const COUPONS = [
  {
    id: 'WELCOME20',
    label: 'WELCOME20',
    desc: '20% off on your first month',
    type: 'percent',
    value: 20,
  },
  {
    id: 'ANNUAL50',
    label: 'ANNUAL50',
    desc: '50% off on annual plans',
    type: 'percent',
    value: 50,
  },
]

const OrderSummary = () => {
  const [walletApplied, setWalletApplied] = useState(false)
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20')
  const [couponInput, setCouponInput] = useState('')
  const [couponOpen, setCouponOpen] = useState(true)

  const subtotal = 14999.0
  const tax = 1079.64
  const total = subtotal + tax

  const fmt = (n) =>
    '₹' +
    n.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  return (
    <div className="flex flex-col gap-0">

      {/* ───────── ORDER SUMMARY CARD ───────── */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

        {/* Heading */}
        <div className="px-5 pt-5">
          <h2 className="text-lg font-bold text-gray-900">
            Order Summary
          </h2>
        </div>

        {/* PLAN BOX */}
        <div className="px-5 py-5">
          <div className="border border-gray-200 rounded-xl p-4 bg-white">

            <div className="flex items-start justify-between">

              {/* LEFT */}
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹4,999
                  </span>

                  <span className="text-sm text-gray-500 font-medium">
                    /month
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-1 whitespace-nowrap">
                  Includes 5,000 credits/mo.
                </p>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <div className="text-[11px] font-semibold text-blue-600 uppercase tracking-wide">
                  Selected Plan
                </div>

                <div className="text-xl font-bold text-gray-900 mt-0.5">
                  Startup
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* UPGRADE BUTTON */}
        <div className="px-5 pb-5">
          <button className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors">

            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                strokeWidth="1.5"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 8v8m-4-4h8"
              />
            </svg>

            Upgrade to Growth Plan
          </button>
        </div>
      </div>

      {/* ───────── ONLY THIS GAP ───────── */}
      <div className="h-4" />

      {/* ───────── WALLET + COUPON CARD ───────── */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

        {/* Wallet */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">

          <div className="flex items-center gap-3">

            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="2"
                  y="7"
                  width="20"
                  height="14"
                  rx="2"
                  strokeWidth="1.5"
                />

                <path
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M16 3H6a2 2 0 00-2 2v2"
                />

                <circle
                  cx="17"
                  cy="14"
                  r="1.5"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-800">
                Wallet Balance
              </p>

              <p className="text-xs text-gray-500">
                ₹500.00 available
              </p>
            </div>
          </div>

          <button
            onClick={() => setWalletApplied(!walletApplied)}
            className={`text-sm font-medium px-4 py-1.5 rounded-lg border transition-colors ${
              walletApplied
                ? 'text-green-700 bg-green-50 border-green-200'
                : 'text-blue-600 bg-white border-blue-200 hover:bg-blue-50'
            }`}
          >
            {walletApplied ? 'Applied' : 'Apply'}
          </button>
        </div>

        {/* Coupon */}
        <div>

          <button
            onClick={() => setCouponOpen(!couponOpen)}
            className="w-full flex items-center justify-between px-5 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2.5">

              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M7 7h.01M3 3h8l10 10a2 2 0 010 2.828l-5.172 5.172a2 2 0 01-2.828 0L3 11V3z"
                />
              </svg>

              <span className="text-sm font-medium text-gray-700">
                Apply Coupon
              </span>
            </div>

            <svg
              className={`w-4 h-4 text-gray-400 transition-transform ${
                couponOpen ? '' : 'rotate-180'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>

          {couponOpen && (
            <div className="px-5 py-4 flex flex-col gap-3">

              {/* Input */}
              <div className="flex gap-2">

                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400"
                />

                <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                  Apply
                </button>
              </div>

              {/* Coupons */}
              {COUPONS.map((c) => (
                <button
                  key={c.id}
                  onClick={() =>
                    setSelectedCoupon(
                      selectedCoupon === c.id ? null : c.id
                    )
                  }
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all ${
                    selectedCoupon === c.id
                      ? 'border-blue-500 bg-blue-50/30'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >

                  <div>
                    <span className="text-sm font-semibold text-gray-900">
                      {c.label}
                    </span>

                    <span className="text-xs text-gray-400 ml-2">
                      {c.desc}
                    </span>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      selectedCoupon === c.id
                        ? 'border-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedCoupon === c.id && (
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ───────── PRICE BREAKDOWN JOINED ───────── */}
      <div className="bg-white border-x border-b border-gray-200 shadow-sm p-5">

        <div className="flex flex-col gap-3">

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Subtotal
            </span>

            <span className="text-sm font-medium text-gray-800">
              {fmt(subtotal)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Tax (18% GST)
            </span>

            <span className="text-sm font-medium text-gray-800">
              {fmt(tax)}
            </span>
          </div>

          <div className="border-t border-gray-200" />

          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-800">
              Total due today
            </span>

            <span className="text-2xl font-bold text-blue-600">
              {fmt(total)}
            </span>
          </div>
        </div>

        <button className="w-full mt-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors">
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default OrderSummary



