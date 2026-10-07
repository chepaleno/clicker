import { useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles/global.css";
import Home from "./pages/Home";
import Boss from "./pages/Boss";
import { ClickerContext } from "./context/ClickerContext";

const App = () => {
  const { count, setCount } = useContext(ClickerContext);
  useLocalStorage();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} />} />
        <Route path="/boss" element={<Boss />} />
      </Routes>
    </Router>
  );
};

export default App;
