import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      <Signup/>
      <Main/>
    </div>
  );
}

export default App;
