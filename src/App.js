import './App.css';
import Carousel from './Components/Carousel';
import Header from './Components/Header';
import Main from './Components/Main';
import { SliderData } from './Components/SliderData';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel slides={SliderData}/>
      <Login/>
      <Signup/>
      <Main/>
    </div>
  );
}

export default App;
