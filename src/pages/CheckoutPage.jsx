
// import React from 'react'
// import { Search, ArrowLeft } from 'lucide-react'
// import BillingForm from '../components/BillingForm'
// import OrderSummary from '../components/OrderSummary'

// const CheckoutPage = () => {
//   return (
//     <div className="min-h-screen bg-[#f0f2f5] flex flex-col">

//       {/* ── TOP NAVBAR ───────────────────────────────── */}
//       <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        
//         {/* Search bar */}
//         <div className="relative flex-1 max-w-sm">
//           <input
//             type="text"
//             defaultValue="Find influencers to collaborate with"
//             className="w-full pl-3 pr-9 py-2 text-sm text-gray-500 border border-blue-400 rounded-md outline-none focus:ring-1 focus:ring-blue-400"
//           />
//           <Search size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//         </div>

//         <div className="flex-1" />

//         <button className="px-4 py-2 text-sm font-medium text-white bg-amber-500 rounded-md hover:bg-amber-600">
//           Upgrade
//         </button>

//         <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
//           Create Campaign
//         </button>

//         <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">
//           o
//         </div>

//         <button className="text-gray-500 p-1">
//           <div className="flex flex-col gap-1">
//             <div className="w-4 h-0.5 bg-current rounded" />
//             <div className="w-4 h-0.5 bg-current rounded" />
//             <div className="w-4 h-0.5 bg-current rounded" />
//           </div>
//         </button>
//       </div>

//       {/* ── MAIN CONTENT ─────────────────────────────── */}
//       <div className="flex-1 px-4 py-4">

//         <div className="max-w-[1060px] mx-auto">

//           {/* HEADER SECTION (Back + Title) */}
//           <div className="mb-5">

//             {/* Back button */}
//             <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 mb-3">
//               <ArrowLeft size={14} />
//               Back to plans
//             </button>

//           </div>

//           {/* CONTENT GRID */}
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5 items-start">
//             <BillingForm />
//             <OrderSummary />
//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default CheckoutPage



import React from 'react'
import { Search, ArrowLeft } from 'lucide-react'
import BillingForm from '../components/BillingForm'
import OrderSummary from '../components/OrderSummary'

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col">

      {/* ── TOP NAVBAR ───────────────────────────────── */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        
        {/* Search bar */}
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            defaultValue="Find influencers to collaborate with"
            className="w-full pl-3 pr-9 py-2 text-sm text-gray-500 border border-blue-400 rounded-md outline-none focus:ring-1 focus:ring-blue-400"
          />

          <Search
            size={15}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        <div className="flex-1" />

        <button className="px-4 py-2 text-sm font-medium text-white bg-amber-500 rounded-md hover:bg-amber-600">
          Upgrade
        </button>

        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Create Campaign
        </button>

        {/* PROFILE IMAGE */}
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 shadow-sm">

          <img
            src="https://placehold.net/avatar-5.svg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <button className="text-gray-500 p-1">
          <div className="flex flex-col gap-1">
            <div className="w-4 h-0.5 bg-current rounded" />
            <div className="w-4 h-0.5 bg-current rounded" />
            <div className="w-4 h-0.5 bg-current rounded" />
          </div>
        </button>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────── */}
      <div className="flex-1 px-4 py-4">

        <div className="max-w-[1060px] mx-auto">

          {/* HEADER SECTION */}
          <div className="mb-6">

            {/* Back button */}
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 mb-3">
              <ArrowLeft size={14} />
              Back to plans
            </button>

          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5 items-start">

            <BillingForm />

            <OrderSummary />
          </div>

        </div>
      </div>

    </div>
  )
}

export default CheckoutPage