import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import {ToastContainer} from "react-toastify";
import {ContextProvider} from "./components/context";

function App() {
  return (
    <div className="App">
        <ToastContainer />
        <Navbar/>
        <ContextProvider>
            <Shop />
        </ContextProvider>
        <Footer/>
    </div>
  );
}

export default App;
