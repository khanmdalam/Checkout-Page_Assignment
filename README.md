# Billing Checkout Page – React + Tailwind CSS

A modern, pixel-perfect, responsive billing checkout page built using **React JS**, **Vite**, and **Tailwind CSS**.

---

# 🚀 Features

* Responsive enterprise SaaS dashboard UI
* Pixel-perfect billing checkout design
* Reusable React components
* Tailwind CSS utility-first styling
* Two-column responsive layout
* Professional form UI
* Order summary card with coupons
* Mobile, tablet, and desktop support
* Clean scalable folder structure
* Easy to maintain and extend

---

# 🛠 Tech Stack

* React JS
* Vite
* Tailwind CSS
* Lucide React Icons

---

# 📁 Folder Structure

```bash
ASSIGNMENT_REACT/
│
├── billing-checkout/
│   │
│   ├── node_modules/
│   │
│   ├── src/
│   │   │
│   │   ├── {components,pages,assets,styles,utils}
│   │   │
│   │   ├── components/
│   │   │   ├── BillingForm.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── CouponCard.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── InputField.jsx
│   │   │   ├── OrderSummary.jsx
│   │   │   └── SelectField.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── CheckoutPage.jsx
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── styles/
│   │   │   └── index.css
│   │   │
│   │   ├── utils/
│   │   │
│   │   ├── App.jsx
│   │   ├── image.svg
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md


```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone <your-github-repository-url>
```

## 2. Navigate Into Project

```bash
cd billing-checkout
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Run Development Server

```bash
npm run dev
```

---

# ✅ Vite Running Output

```bash
> billing-checkout@1.0.0 dev
> vite

VITE v5.4.21 ready in 601 ms

➜ Local:   http://localhost:5173/
➜ Network: use --host to expose
➜ press h + enter to show help
```

---

# 🎨 UI Sections

## Header Section

* Search Input
* Upgrade Button
* Create Campaign Button
* Profile Avatar/Menu
* Back to Plans Link

## Left Section – Billing Information

Fields Included:

* Company Name
* Email
* GST Number
* PAN Number
* Premise/House No.
* Street
* State Dropdown
* City Dropdown
* Country
* Pin Code

Buttons:

* Cancel
* Save Details

## Right Section – Order Summary

Includes:

* Pricing Card
* Selected Plan Label
* Upgrade Plan Button
* Wallet Balance
* Coupon Input
* Coupon Cards
* Subtotal
* Tax
* Total Due Today
* Proceed to Payment Button

---

# 💡 Component Architecture

Reusable components are used throughout the application:

| Component    | Purpose                   |
| ------------ | ------------------------- |
| Button       | Reusable button component |
| InputField   | Input field with label    |
| SelectField  | Reusable select dropdown  |
| Card         | Generic card wrapper      |
| CouponCard   | Coupon UI card            |
| Header       | Top navigation section    |
| BillingForm  | Billing form section      |
| OrderSummary | Payment summary section   |

---

# 📱 Responsive Design

The project is fully responsive:

* Desktop Layout → Two-column design
* Tablet Layout → Optimized spacing
* Mobile Layout → Stacked sections

Tailwind breakpoints used:

```bash
sm:
md:
lg:
xl:
```

---

# 🎯 Design Highlights

* Modern SaaS dashboard layout
* Clean typography
* Soft shadows
* Rounded corners
* Proper spacing system
* Professional UI alignment
* Consistent visual hierarchy
* Hover and focus states

---

# 📦 Required Packages

Install required packages:

```bash
npm install react-router-dom lucide-react
```

Tailwind setup:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

# ⚡ Tailwind Configuration

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

# 🧩 Example App.jsx

```jsx
import CheckoutPage from './pages/CheckoutPage'

function App() {
  return <CheckoutPage />
}

export default App
```

---

# 🧩 Example main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

---

# 🎨 globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-[#f5f7fb] text-gray-800 font-sans;
}
```

---

# 🔥 Project Goals

This project focuses on:

* Clean UI architecture
* Reusable React components
* Enterprise dashboard design system
* Scalable frontend structure
* Production-ready code quality

---

# 📸 GitHub Upload Checklist

Before uploading to GitHub:

✅ Remove node_modules

✅ Add README.md

✅ Add proper commit message

✅ Push source code

---

# 🚀 Git Commands

```bash
git init
git add .
git commit -m "Initial billing checkout UI"
git branch -M main
git remote add origin <your-github-url>
git push -u origin main
```

---

# 👨‍💻 Author

 Noor Alam  
Computer Science and Engineering (CSE) Student  
This project was developed using React.js and Tailwind CSS.
