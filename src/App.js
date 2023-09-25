import './App.css';
import Footerr from './components/footer/Footerr';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
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
