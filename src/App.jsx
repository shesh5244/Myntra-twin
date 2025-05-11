import { Navbar } from "./Components/Navbar/Navbar";
import { PrivateComponent } from "./Components/PrivateComponent";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import Products from "./Components/Products.jsx";
import Signup from "./Components/Signup";
import { Home } from "./Components/Home/Home";
import { Footer } from "../src/Components/Footer/Footer";
import { Navbarpayment } from "./Components/CartComponents/components/navbarfinal/Paymentnavbar";
import { Fullbagpage } from "./Components/CartComponents/components/Fullbagpage/fullbagpage";
import { Fulladdresspage } from "./Components/CartComponents/addresspagecomponents/Fulladdresspage/Fulladdresspage";
import { Fullpaymentpage } from "./Components/CartComponents/paymentcomponents/Fullpaymentpage";
import { useEffect } from "react";
import ScrollToTop from "./Components/ScrollToTop";
import ProductList from "./Components/ProductList"; // <-- ✅ New import

function App() {
   const Location = useLocation();
   console.log(Location);

   useEffect(() => {}, []);

   return (
      <div className="App">
         {Location.pathname === "/bag" ||
         Location.pathname === "/address" ||
         Location.pathname === "/payment" ? (
            <Navbarpayment />
         ) : (
            <Navbar />
         )}
         <ScrollToTop />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Products data={"menTShirts"} />} />
            <Route path="/women" element={<Products data={"womensProducts"} />} />
            <Route path="/kids" element={<Products data={"boysData"} />} />
            <Route path="/home&living" element={<Products data={"homeData"} />} />
            <Route path="/Beauty" element={<Products data={"beautyData"} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            {/* ✅ New Route for ProductList */}
            <Route path="/mongo-products" element={<ProductList />} />

            <Route
               path="/bag"
               element={
                  <PrivateComponent>
                     <Fullbagpage />
                  </PrivateComponent>
               }
            />
            <Route
               path="/address"
               element={
                  <PrivateComponent>
                     <Fulladdresspage />
                  </PrivateComponent>
               }
            />
            <Route
               path="/payment"
               element={
                  <PrivateComponent>
                     <Fullpaymentpage />
                  </PrivateComponent>
               }
            />
         </Routes>

         <Footer />
      </div>
   );
}

export default App;
