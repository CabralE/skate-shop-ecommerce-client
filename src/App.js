import "./App.css";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import { SliderData } from "./Components/SliderData";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar/Navbar";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import { FeaturedProductsData } from "./Components/FeaturedProducts/FeaturedProductsData";
import Footer from "./Components/Footer/Footer";
// import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import FeaturedProductsTest from "./Components/FeaturedProducts/FeaturedProductsTest";

function App() {
  const { isLoading, error } = useAuth0();
  const productURL = "https://skate-ecommerce.herokuapp.com/product";

  const [productInformation, setProductInformtion] = useState(null);

  const fetchProductInformation = async () => {
    const response = await fetch(productURL);
    const data = await response.json();
    setProductInformtion(data);
    console.log(data);
  };

  useEffect(() => fetchProductInformation(), []);

  return (
    <div className="App">
      <Navbar />
      <main className="column">
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
          <>
            {/* <LoginButton /> */}
            <LogoutButton />
            <Profile />
          </>
        )}
      </main>

      <Carousel slides={SliderData} />
      <FeaturedProductsTest productInformation={productInformation} />
      {/*<FeaturedProducts FeaturedProductsData={FeaturedProductsData} />*/}
      <Footer />
    </div>
  );
}

export default App;
