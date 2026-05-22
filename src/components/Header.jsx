// import React, { useState } from 'react'
// import {
//   Search,
//   Zap,
//   Megaphone,
//   Bell,
//   ChevronDown,
//   ArrowLeft,
//   User,
//   Settings,
//   LogOut,
//   HelpCircle,
// } from 'lucide-react'
// import Button from './Button'

// /**
//  * Header – top navigation bar with search, actions and profile
//  */
// const Header = ({ onBack }) => {
//   const [profileOpen, setProfileOpen] = useState(false)
//   const [searchFocused, setSearchFocused] = useState(false)

//   return (
//     <header className="bg-white border-b border-slate-200/80 sticky top-0 z-30">
//       {/* Main nav row */}
//       <div className="px-6 h-16 flex items-center gap-4">
//         {/* Logo / Brand */}
//         <div className="shrink-0 flex items-center gap-2 mr-2">
//           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center shadow-sm">
//             <Zap size={15} className="text-white" fill="white" />
//           </div>
//           <span className="font-display font-700 text-slate-800 text-sm hidden sm:block tracking-tight">
//             AdPulse
//           </span>
//         </div>

//         {/* Search */}
//         <div className={`
//           relative flex-1 max-w-sm transition-all duration-200
//           ${searchFocused ? 'max-w-md' : ''}
//         `}>
//           <Search
//             size={15}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
//           />
//           <input
//             type="text"
//             placeholder="Search campaigns, reports..."
//             onFocus={() => setSearchFocused(true)}
//             onBlur={() => setSearchFocused(false)}
//             className="
//               w-full pl-9 pr-4 py-2 text-sm text-slate-600 bg-slate-50
//               border border-slate-200 rounded-lg outline-none
//               placeholder:text-slate-400
//               focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10
//               transition-all duration-150
//             "
//           />
//         </div>

//         {/* Spacer */}
//         <div className="flex-1" />

//         {/* Actions */}
//         <div className="flex items-center gap-2">
//           {/* Upgrade */}
//           <Button
//             variant="upgrade"
//             size="sm"
//             leftIcon={<Zap size={13} fill="white" />}
//             className="hidden sm:inline-flex"
//           >
//             Upgrade
//           </Button>

//           {/* Create Campaign */}
//           <Button
//             variant="primary"
//             size="sm"
//             leftIcon={<Megaphone size={13} />}
//             className="hidden md:inline-flex"
//           >
//             Create Campaign
//           </Button>

//           {/* Bell */}
//           <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors">
//             <Bell size={17} />
//             <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white" />
//           </button>

//           {/* Profile dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setProfileOpen(!profileOpen)}
//               className="flex items-center gap-2 pl-1.5 pr-2 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
//             >
//               <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
//                 A
//               </div>
//               <ChevronDown size={13} className={`text-slate-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
//             </button>



//             {/* Dropdown */}
//             {profileOpen && (
//               <div className="absolute right-0 top-full mt-1.5 w-52 bg-white border border-slate-200 rounded-xl shadow-card-md py-1.5 z-50">
//                 <div className="px-3 py-2 border-b border-slate-100 mb-1">
//                   <p className="text-sm font-semibold text-slate-700">Noor Alam</p>
//                   <p className="text-xs text-slate-400">noor@company.com</p>
//                 </div>
//                 {[
//                   { icon: User, label: 'Profile' },
//                   { icon: Settings, label: 'Settings' },
//                   { icon: HelpCircle, label: 'Help & Support' },
//                 ].map(({ icon: Icon, label }) => (
//                   <button
//                     key={label}
//                     className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-colors"
//                   >
//                     <Icon size={14} className="text-slate-400" />
//                     {label}
//                   </button>
//                 ))}
//                 <div className="border-t border-slate-100 mt-1 pt-1">
//                   <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
//                     <LogOut size={14} />
//                     Sign out
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Sub-nav / breadcrumb row */}
//       <div className="px-6 h-10 flex items-center border-t border-slate-100">
//         <button
//           onClick={onBack}
//           className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-brand-600 transition-colors group"
//         >
//           <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
//           Back to plans
//         </button>
//       </div>
//     </header>
//   )
// }

// export default Header









import React, { useState } from 'react'
import {
  Search,
  Zap,
  Megaphone,
  Bell,
  ChevronDown,
  ArrowLeft,
  User,
  Settings,
  LogOut,
  HelpCircle,
} from 'lucide-react'

import Button from './Button'

/**
 * Header – top navigation bar with search, actions and profile
 */
const Header = ({ onBack }) => {
  const [profileOpen, setProfileOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className="bg-white border-b border-slate-200/80 sticky top-0 z-30">

      {/* Main nav row */}
      <div className="px-6 h-16 flex items-center gap-4">

        {/* Logo / Brand */}
        <div className="shrink-0 flex items-center gap-2 mr-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center shadow-sm">
            <Zap size={15} className="text-white" fill="white" />
          </div>

          <span className="font-display font-700 text-slate-800 text-sm hidden sm:block tracking-tight">
            AdPulse
          </span>
        </div>

        {/* Search */}
        <div
          className={`
            relative flex-1 max-w-sm transition-all duration-200
            ${searchFocused ? 'max-w-md' : ''}
          `}
        >
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />

          <input
            type="text"
            placeholder="Search campaigns, reports..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="
              w-full pl-9 pr-4 py-2 text-sm text-slate-600 bg-slate-50
              border border-slate-200 rounded-lg outline-none
              placeholder:text-slate-400
              focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-500/10
              transition-all duration-150
            "
          />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Upgrade */}
          <Button
            variant="upgrade"
            size="sm"
            leftIcon={<Zap size={13} fill="white" />}
            className="hidden sm:inline-flex"
          >
            Upgrade
          </Button>

          {/* Create Campaign */}
          <Button
            variant="primary"
            size="sm"
            leftIcon={<Megaphone size={13} />}
            className="hidden md:inline-flex"
          >
            Create Campaign
          </Button>

          {/* Bell */}
          <button className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors">
            <Bell size={17} />

            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white" />
          </button>

          {/* ───────── PROFILE DROPDOWN ───────── */}
          <div className="relative">

            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 pl-1.5 pr-2 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >

              {/* PROFILE IMAGE */}
              <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200 shadow-sm">

                <img
                  src="https://i.pravatar.cc/150?img=5"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* DROPDOWN ICON */}
              <ChevronDown
                size={13}
                className={`text-slate-400 transition-transform ${
                  profileOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-52 bg-white border border-slate-200 rounded-xl shadow-card-md py-1.5 z-50">

                {/* USER INFO */}
                <div className="px-3 py-2 border-b border-slate-100 mb-1">

                  <div className="flex items-center gap-2">

                    {/* SMALL PROFILE IMAGE */}
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200">

                      <img
                        src="https://i.pravatar.cc/150?img=5"
                        alt="profile"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        Noor Alam
                      </p>

                      <p className="text-xs text-slate-400">
                        noor@company.com
                      </p>
                    </div>
                  </div>
                </div>

                {[
                  { icon: User, label: 'Profile' },
                  { icon: Settings, label: 'Settings' },
                  { icon: HelpCircle, label: 'Help & Support' },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-colors"
                  >
                    <Icon size={14} className="text-slate-400" />
                    {label}
                  </button>
                ))}

                <div className="border-t border-slate-100 mt-1 pt-1">

                  <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
                    <LogOut size={14} />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sub-nav / breadcrumb row */}
      <div className="px-6 h-10 flex items-center border-t border-slate-100">

        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-brand-600 transition-colors group"
        >
          <ArrowLeft
            size={13}
            className="group-hover:-translate-x-0.5 transition-transform"
          />

          Back to plans
        </button>
      </div>
    </header>
  )
}

export default Header