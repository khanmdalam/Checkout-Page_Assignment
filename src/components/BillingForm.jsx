import React, { useState } from 'react'

const STATES = [
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'DL', label: 'Delhi' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'HR', label: 'Haryana' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'WB', label: 'West Bengal' },
]

const CITIES = {
  DL: ['New Delhi', 'Dwarka', 'Rohini'],
  MH: ['Mumbai', 'Pune', 'Nagpur'],
  KA: ['Bangalore', 'Mysore', 'Hubli'],
  TN: ['Chennai', 'Coimbatore', 'Madurai'],
  GJ: ['Ahmedabad', 'Surat', 'Vadodara'],
  HR: ['Gurugram', 'Faridabad', 'Panipat'],
  UP: ['Lucknow', 'Noida', 'Agra'],
  WB: ['Kolkata', 'Howrah', 'Durgapur'],
  RJ: ['Jaipur', 'Jodhpur', 'Udaipur'],
  AP: ['Hyderabad', 'Visakhapatnam', 'Vijayawada'],
}

/* Shared input style */
const inputCls = "w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
const labelCls = "block text-sm text-gray-700 mb-1.5"

const BillingForm = () => {
  const [form, setForm] = useState({
    companyName: 'AnsariinfoTech',
    email: 'noor@company.com',
    gstNumber: '',
    panNumber: '',
    premise: '',
    street: '',
    state: '',
    city: '',
    country: 'India',
    pinCode: '',
  })

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))
  const cities = CITIES[form.state] || []

  return (
    <div className="bg-white rounded-lg p-7 shadow-sm border border-gray-200">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Review your details</h1>
      <h2 className="text-base font-semibold text-gray-800 mb-5">Billing Information</h2>

      <div className="flex flex-col gap-5">

        {/* Row 1: Company Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Company Name</label>
            <input
              type="text"
              placeholder="abhigyan"
              value={form.companyName}
              onChange={set('companyName')}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Email</label>
            <input
              type="email"
              placeholder="abhigyan.pandey@getreelax.com"
              value={form.email}
              onChange={set('email')}
              className={inputCls}
            />
          </div>
        </div>

        {/* Row 2: GST + PAN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>
              GST Number{' '}
              <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="GST Number"
              value={form.gstNumber}
              onChange={set('gstNumber')}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>
              PAN Number{' '}
              <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              placeholder="PAN Number"
              value={form.panNumber}
              onChange={set('panNumber')}
              className={inputCls}
            />
          </div>
        </div>

        {/* Row 3: Premise + Street */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Premise/House no.</label>
            <input
              type="text"
              placeholder="Premise/House no."
              value={form.premise}
              onChange={set('premise')}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Street</label>
            <input
              type="text"
              placeholder="Street"
              value={form.street}
              onChange={set('street')}
              className={inputCls}
            />
          </div>
        </div>

        {/* Row 4: State + City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>State</label>
            <div className="relative">
              <select
                value={form.state}
                onChange={(e) => setForm(f => ({ ...f, state: e.target.value, city: '' }))}
                className={`${inputCls} appearance-none pr-8 ${!form.state ? 'text-gray-400' : 'text-gray-700'}`}
              >
                <option value="" disabled>Select state</option>
                {STATES.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div>
            <label className={labelCls}>City</label>
            <div className="relative">
              <select
                value={form.city}
                onChange={set('city')}
                disabled={!form.state}
                className={`${inputCls} appearance-none pr-8 ${!form.city ? 'text-gray-400' : 'text-gray-700'} disabled:bg-gray-50 disabled:cursor-not-allowed`}
              >
                <option value="" disabled>Select city</option>
                {cities.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 5: Country + Pin Code */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Country</label>
            <input
              type="text"
              placeholder="India"
              value={form.country}
              onChange={set('country')}
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>Pin Code</label>
            <input
              type="text"
              placeholder="Pincode"
              value={form.pinCode}
              onChange={set('pinCode')}
              className={inputCls}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-1" />

        {/* Action buttons */}
        <div className="flex items-center justify-end gap-3 pt-1">
          <button className="px-7 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button className="px-7 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
            Save Details
          </button>
        </div>

      </div>
    </div>
  )
}

export default BillingForm
