import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import { SliderData } from './Components/SliderData';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Main from './Components/Main';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Carousel slides={SliderData}/>
      <Login/>
      <Signup/>
      <Main/>
    </div>
  );
}

export default App;
