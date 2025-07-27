import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoinDetails from "./pages/CoinDetails";
import Watchlist from "./pages/Watchlist";
import About from "./pages/About";
import Navbar from "./components/Navbar";
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
            <Route path="/coin/:id" element={<CoinDetails />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Navbar />
        </>
      )}
    </Router>
  );
}

export default App;
