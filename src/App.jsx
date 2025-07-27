import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoinDetails from "./pages/CoinDetails";
import About from "./pages/About";
import Loader from "./components/Loader";
import {useState, useEffect} from "react";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (<Loader/>) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin" element={<CoinDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
