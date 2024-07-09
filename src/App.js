// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import ProductGrid from './components/ProductGrid';
// import ViewCart from './pages/ViewCart';
// import product1Image from './assets/images/image 5.png';
// import product2Image from './assets/images/image 6 (1).png';
// import product3Image from './assets/images/image 7.png';
// import product4Image from './assets/images/Frame 32.png';
// import product5Image from './assets/images/Frame 27.png';
// import product6Image from './assets/images/Frame 21 (1).png';
// import product7Image from './assets/images/image 11.png';
// import product8Image from './assets/images/image 12.png';
// import product9Image from './assets/images/image 13.png';
// import AvailableProduct from './pages/AvailableProduct';
// import Partner from './components/Partner';


// const products = [
//   { id: 1, name: 'Multivitamin Syrup', image: product1Image },
//   { id: 2, name: 'Vitamins & Supplement',  image: product2Image },
//   { id: 3, name: 'Reproductive Health',  image: product3Image },
//   { id: 4, name: 'Pain Relief',  image: product4Image },
//   { id: 5, name: 'AntiBacterial',  image: product5Image },
//   { id: 6, name: 'AntiMalaria',  image: product6Image },
//   { id: 7, name: 'Emzor Paracetamol',  image: product7Image },
//   { id: 8, name: 'Feroglobin Capsule',  image: product8Image },
//   { id: 9, name: 'Natures Field Vitamin C',  image: product9Image },
// ];

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <ProductGrid products={products} showAddToCart={false} className="three-column" showPrice={false} alignText="center" />
//                 <Partner />
//               </>
//             }
//           />
//           <Route path="/viewcart/:id" element={<ViewCart />} />
//           <Route path="/available-products" element={<AvailableProduct />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ViewCart from './pages/ViewCart';
import product1Image from './assets/images/image 5.png';
import product2Image from './assets/images/image 6 (1).png';
import product3Image from './assets/images/image 7.png';
import product4Image from './assets/images/Frame 32.png';
import product5Image from './assets/images/Frame 27.png';
import product6Image from './assets/images/Frame 21 (1).png';
import product7Image from './assets/images/image 11.png';
import product8Image from './assets/images/image 12.png';
import product9Image from './assets/images/image 13.png';
import AvailableProduct from './pages/AvailableProduct';
import Partner from './components/Partner';
import DeliveryDetails from './pages/DeliveryDetails';

const products = [
  { id: 1, name: 'Multivitamin Syrup', image: product1Image },
  { id: 2, name: 'Vitamins & Supplement',  image: product2Image },
  { id: 3, name: 'Reproductive Health',  image: product3Image },
  { id: 4, name: 'Pain Relief',  image: product4Image },
  { id: 5, name: 'AntiBacterial',  image: product5Image },
  { id: 6, name: 'AntiMalaria',  image: product6Image },
  { id: 7, name: 'Emzor Paracetamol',  image: product7Image },
  { id: 8, name: 'Feroglobin Capsule',  image: product8Image },
  { id: 9, name: 'Natures Field Vitamin C',  image: product9Image },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductGrid products={products} showAddToCart={false} className="three-column" showPrice={false} alignText="center" />
                <Partner />
              </>
            }
          />
          <Route path="/delivery-details/:id" element={<DeliveryDetails />} />
          <Route path="/viewcart/:id" element={<ViewCart />} />
          <Route path="/available-products" element={<AvailableProduct />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
