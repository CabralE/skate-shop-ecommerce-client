import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import { SliderData } from './Components/SliderData';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Components/Main';
import Navbar from './Components/Navbar/Navbar';
import FeaturedProducts from './Components/FeaturedProducts/FeaturedProducts';
import { FeaturedProductsData } from './Components/FeaturedProducts/FeaturedProductsData';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel slides={SliderData}/>
      <FeaturedProducts FeaturedProductsData={FeaturedProductsData}/>
      <Footer/>
    </div>
  );
}

export default App;
