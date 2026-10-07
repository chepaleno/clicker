import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import "../styles/global.css";
import bobImage from "../assets/bob.png";
import "../pages/Boss.css";
import FirstBoss from "../components/FirstBoss/FirstBoss";
import mus from "../assets/mus/battlem.mp3";
import { useRef, useState } from "react";

const Boss = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div>
      <div
        className="bossFullScreenDiv"
        style={{ backgroundImage: `url(${bobImage})` }}
      ></div>
      <audio
        ref={audioRef}
        // controls autoPlay
        muted={isMuted}
        src={mus}
      ></audio>

      <Link to="/">Home</Link>
      <Link to="/boss">Boss</Link>
      <FirstBoss audioRef={audioRef} setIsMuted={setIsMuted} />
    </div>
  );
};

export default Boss;
