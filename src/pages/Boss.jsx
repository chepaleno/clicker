import { Link } from "react-router-dom";
import bobImage from "../assets/bob.webp";
import "../pages/Boss.css";
import FirstBoss from "../components/FirstBoss/FirstBoss";
import mus from "../assets/mus/battlem.mp3";
import { useContext, useRef, useState } from "react";
import { ClickerContext } from "../context/ClickerContext";

const Boss = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const { freeMod } = useContext(ClickerContext);
  return (
    <div>
      <div
        className="bossFullScreenDiv"
        style={{ backgroundImage: `url(${bobImage})` }}
      ></div>
      <audio ref={audioRef} muted={isMuted} src={mus}></audio>

      <Link to="/" className={freeMod ? "" : "none"}>
        Home
      </Link>
      <Link to="/boss" className={freeMod ? "" : "none"}>
        Boss
      </Link>
      <FirstBoss audioRef={audioRef} setIsMuted={setIsMuted} />
    </div>
  );
};

export default Boss;
