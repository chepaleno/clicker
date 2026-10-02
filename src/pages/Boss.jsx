import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import "../styles/global.css";
import bobImage from "../assets/bob.png";
import "../pages/Boss.css"
import FirstBoss from "../components/FirstBoss/FirstBoss";

const Boss = () => {
  return (
    <div>
      <div
        className="bossFullScreenDiv"
        style={{ backgroundImage: `url(${bobImage})` }}
      ></div>
      
      <Link to="/">Home</Link>
      <Link to="/boss">Boss</Link>
      <FirstBoss />
    </div>
  );
};

export default Boss;
