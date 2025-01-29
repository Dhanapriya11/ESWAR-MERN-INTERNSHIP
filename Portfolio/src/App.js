// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeartPage from './HeartPage';
// import ImagePage from './ImagePage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HeartPage />} />
//         <Route path="/images" element={<ImagePage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import ProductList from './ProductList.js';
import ShoppingCart from './ShoppingCart.js';
import App2 from './router.js'
function App() {
    // // State for the cart
    // const [cart, setCart] = useState([]);

    // // Products list
    // const products = ['Laptop', 'Smartphone', 'Headphone'];

    // // Function to add a product to the cart
    // const addToCart = (item) => {
    //     setCart([...cart, item]);
    // };

    return (
        <div className="App">
            {/* <h1>ShoppingCart</h1>
            <h3>Items in the Cart:</h3>
            <ShoppingCart cart={cart} />
            <h3>Product List</h3>
            <ProductList products={products} addToCart={addToCart} /> */}
            <App2/>
            <footer className="footer">
        <p>&copy; 2025 . All rights reserved.</p>
      </footer>
        </div>
    );
}

export default App;


