import { useContext, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Crab from "./components/Crab/Crab";
import Castle from "./components/Castle/Castle";
import "./styles/global.css";
import Home from "./pages/Home";
import Boss from "./pages/Boss";
import { ClickerContext } from "./context/ClickerContext";

const App = () => {
  // const [count, setCount] = useState(0);
  const { count, setCount } = useContext(ClickerContext);
  useLocalStorage();

  // const buy = () => {
  //   if (count >= 5) {
  //     setCount(count - 5);
  //   }
  // };

  // const onClick = () => {
  //   setChisloClicovPoText((prev) => prev + 1);
  // };

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
