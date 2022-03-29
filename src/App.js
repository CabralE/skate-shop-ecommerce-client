import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import LogoutButton from "./Components/LogoutButton";
import Profile from "./Profile";
import Product from "./Pages/Product";
import ErrorPage from "./Pages/ErrorPage";
import NavBar2 from "./Components/Navbar/Navbar2";

function App() {
  const { isLoading, error } = useAuth0();
  const productURL = "https://skate-ecommerce.herokuapp.com/product/";

  const [productInformation, setProductInformtion] = useState(null);

  const fetchProductInformation = async () => {
    const response = await fetch(productURL);
    const data = await response.json();
    setProductInformtion(data);
  };

  useEffect(() => fetchProductInformation(), []);

  return (
    <div className="App">
      <NavBar2 />
      <main className="column">
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
          <>
            <LogoutButton />
            <Profile />
          </>
        )}
      </main>

      <Routes>
        <Route
          path="/"
          element={<Index productInformation={productInformation} />}
        />
        <Route
          path="/show/:id"
          element={<Show productInformation={productInformation} />}
        />
        <Route
          path="/product/:id"
          element={<Product productInformation={productInformation} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
