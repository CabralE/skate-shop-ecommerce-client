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

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <div className="App">
      <Navbar />
      <main className="column">
        <h1>Auth0 Login</h1>
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
      <FeaturedProducts FeaturedProductsData={FeaturedProductsData} />
      <Footer/>
    </div>
  );
}

export default App;
