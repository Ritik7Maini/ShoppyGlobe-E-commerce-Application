🛍️ ShoppyGlobe – E-commerce Application
ShoppyGlobe is a basic e-commerce web application built using React, Redux, and React Router.
It allows users to browse products, view product details, add items to the cart, modify quantities, remove items, and search for products — all in a clean and responsive interface.

🚀 Features
🧭 Navigation with Header, Cart, and Home

🛒 Add to Cart, Remove, Update Quantity

🔍 Search products by name

📦 Product Detail View with full information

📥 Lazy Loading and Code Splitting

📡 API Integration (https://dummyjson.com/products)

🧠 Redux for Cart and Search state management

❗ 404 Not Found Page

📱 Responsive Design for all screen sizes

✅ Error Handling for failed API calls

📁 Folder Structure
css
Copy
Edit
src/
├── components/
│   ├── Header.jsx
│   ├── ProductItem.jsx
│   ├── CartItem.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductList.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   └── NotFound.jsx
├── redux/
│   ├── cartSlice.js
│   └── store.js
├── hooks/
│   └── useFetchProducts.js
├── App.jsx
├── index.js
└── App.css
🧑‍💻 Technologies Used
React (Functional Components + Hooks)

Redux Toolkit (State Management)

React Router DOM (Routing)

CSS (Custom Styling & Responsive Design)

React.lazy & Suspense (Performance Optimization)

DummyJSON API (Mock Product Data)

🛠️ Installation & Running Locally
Clone the Repository


git clone 
cd shoppyglobe
Install Dependencies
npm install
npm start
Visit in Browser

✅ Functional Highlights
Cart Summary: Shows quantity and price with total cost.

Clear Cart Button: Instantly removes all items.

Search Filter: Dynamically filters products as you type.

Unique Routing: Dynamic route for each product via /product/:id.


