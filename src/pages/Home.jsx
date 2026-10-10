import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Crab from "../components/Crab/Crab";
import Castle from "../components/Castle/Castle";
import "../styles/global.css";
import mus from "../assets/mus/bgm.mp3";
import { useContext } from "react";
import { ClickerContext } from "../context/ClickerContext";
import WinScreen from "../components/WinScreen/WinScreen";
import "../pages/Home.css";
import mainImage from "../assets/main.webp";
import Menu from "../components/Menu/Menu";

const Home = (props) => {
  const { count, setCount } = props;
  const {
    shell,
    setShell,
    bossCount,
    setBossCount,
    castleLvl,
    dmgLvl,
    freeMod,
  } = useContext(ClickerContext);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);
  let theFinal = false;

  const onClick = () => {
    localStorage.clear();
  };

  const cheatClick = () => {
    setCount(count + 1000000);
  };

  const cheatShellClick = () => {
    setShell(shell + 1);
  };

  const bossCountplusone = () => {
    setBossCount(bossCount + 1);
  };

  if (dmgLvl === 6 && castleLvl === 7 && freeMod === false) {
    theFinal = true;
  }

  return (
    <div
      className={`fullScreenDiv`}
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      {theFinal && <WinScreen theFinal={theFinal} />}
      <audio ref={audioRef} muted={isMuted} src={mus}></audio>
      <Crab
        count={count}
        setCount={setCount}
        setIsMuted={setIsMuted}
        audioRef={audioRef}
      />
      <div className="count">Счёт:{count}</div>
      <div className="count">🐚:{shell}</div>

      <Castle
        count={count}
        setCount={setCount}
        shell={shell}
        setShell={setShell}
      />
      <div className={freeMod ? "" : "none"}>
        <Menu
          count={count}
          setCount={setCount}
          shell={shell}
          setShell={setShell}
          bossCount={bossCount}
          setBossCount={setBossCount}
          onDeleteSave={onClick}
        />
      </div>
    </div>
  );
};

export default Home;
