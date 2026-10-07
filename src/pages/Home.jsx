import { useState, useEffect, useRef } from "react";
// import { savedClick, saveClick, useLocalStorage } from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import Crab from "../components/Crab/Crab";
import Castle from "../components/Castle/Castle";
import "../styles/global.css";
import mus from "../assets/mus/bgm.mp3";
import { useContext } from "react";
import { ClickerContext } from "../context/ClickerContext";
import WinScreen from "../components/WinScreen/WinScreen";

const Home = (props) => {
  const { count, setCount } = props;
  const { shell, setShell, bossCount, setBossCount, castleLvl, dmgLvl, freeMod } =
    useContext(ClickerContext);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);
  let theFinal = false;

  const buy = () => {
    if (count >= 5) {
      setCount(count - 5);
    }
  };

  const onClick = () => {
    localStorage.clear();
  };

  const cheatClick = () => {
    setCount(count + 1000000);
  };
  {
    /* читы */
  }
  const cheatShellClick = () => {
    setShell(shell + 1);
  };
  {
    /* читы */
  }
  const bossCountplusone = () => {
    setBossCount(bossCount + 1);
  };
  {
    /* читы */
  }

  // console.log(castleLvl)
  // console.log(dmgLvl)
  if (dmgLvl === 6 && castleLvl === 7 && freeMod === true) {
    console.log("победа");
    theFinal = true;
  }

  return (
    <div
      className={`fullScreenDiv`}
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/a0/bc/ce/a0bcce04cd9c1ce026508369c9de6e03.png?nii=t')",
      }}
    >
      {theFinal && <WinScreen theFinal={theFinal} />}
      <audio
        ref={audioRef}
        // controls autoPlay
        muted={isMuted}
        src={mus}
      ></audio>
      <Link to="/">Home</Link>
      <Link to="/boss">Boss</Link>
      <Crab
        count={count}
        setCount={setCount}
        setIsMuted={setIsMuted}
        audioRef={audioRef}
      />
      <div>🐚:{shell}</div>
      <div>счёт:{count}</div>
      <div onClick={onClick}>удалить сейв</div>
      <div onClick={buy}>купить</div>
      <Castle
        count={count}
        setCount={setCount}
        shell={shell}
        setShell={setShell}
      />
      <div onClick={cheatClick}>+1000</div> {/* читы */}
      <div onClick={cheatShellClick}>+1000 shell</div> {/* читы */}
      <div onClick={bossCountplusone}>+1lvlboss</div> {/* читы */}
    </div>
  );
};

export default Home;
