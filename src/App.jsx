import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="App">
        <ToastContainer />
        <Navbar/>
        <Shop/>
        <Footer/>
    </div>
  );
}

export default App;
