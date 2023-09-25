import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footerr from './components/Footer/Footerr';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footerr />
    </div>
  );
}

export default App;
