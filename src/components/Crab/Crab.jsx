import { useState, useRef, useContext } from "react";
import Upgrade from "../Upgrade/Upgrade";
import "./Crab.css";
import "../Upgrade/Upgrade.css";
import Dialog from "../Dialog/Dialog";
import { ClickerContext } from "../../context/ClickerContext";
import PreBoss from "../PreBoss/PreBoss";

const Crab = (props) => {
  const { setCount, count, setIsMuted, audioRef } = props;
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedForAnimation, setIsClickedForAnimation] = useState(false);
  const [clickedLimit, setClickedLimit] = useState(0);
  const [crabColdown, setCrabColdown] = useState(true);
  const [bossCountForSpawn, setBossCountForSpawn] = useState(0);

  const { dmgLvl, setDmgLvl, setCrabText } = useContext(ClickerContext);

  const crabUp = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 50);
    setIsClickedForAnimation(true);
    setTimeout(() => setIsClickedForAnimation(false), 60);
  };

  const MultiClick = useRef(1);
  const isTheFirstMessage = useRef(true);
  const price = useRef(25);
  const shellPrice = useRef(0);
  let islvlMax = false;

  if (count > 0) {
    isTheFirstMessage.current = false;
  }

  switch (dmgLvl) {
    case 1:
      MultiClick.current = 2;
      price.current = 75;
      break;
    case 2:
      MultiClick.current = 4;
      price.current = 225;
      shellPrice.current = 1;
      break;
    case 3:
      MultiClick.current = 8;
      price.current = 675;
      shellPrice.current = 0;
      break;
    case 4:
      MultiClick.current = 16;
      price.current = 2000;
      shellPrice.current = 1;
      break;
    case 5:
      MultiClick.current = 32;
      price.current = 6000;
      shellPrice.current = 0;
      break;
    case 6:
      MultiClick.current = 64;
      islvlMax = true;
      break;
    default:
  }

  const onClick = () => {
    if (crabColdown) {
      setCount((prev) => {
        return prev + MultiClick.current;
      });
      setClickedLimit((prev) => {
        return prev + 1;
      });
      setBossCountForSpawn((prev) => {
        return prev + 1;
      });
      crabUp();

      setIsMuted(false);
      audioRef.current.play();
      audioRef.current.volume = 0.1;

      if (isTheFirstMessage.current) {
        isTheFirstMessage.current = false;
        setCrabText("Поздравляю с первым кликом");
        setTimeout(() => {
          setCrabText("");
        }, 2000);
      }
    } else {
      console.log("чил");
    }
  };

  if (clickedLimit >= 60) {
    setCrabColdown(false);
    setCrabText("Подустал");
    setTimeout(() => {
      setCrabText("");
    }, 5000);
    setTimeout(() => {
      setCrabColdown(true);
    }, 5000);
    setClickedLimit(0);
  }

  return (
    <div>
      <div className={`Z ${crabColdown ? "none" : ""}`}>💤</div>
      <div
        className={`Crab crabDiv ${isClicked ? "crabClicked" : ""} ${crabColdown ? "" : "Blur"}`}
        onClick={onClick}
      >
        🦀
      </div>
      <div className="upgradeDmg">
        <Upgrade
          setCount={setCount}
          dmgLvl={dmgLvl}
          setDmgLvl={setDmgLvl}
          children={`🔨урон:${MultiClick.current}`}
          count={count}
          price={price.current}
          shellPrice={shellPrice.current}
          islvlMax={islvlMax}
        />
      </div>
      <Dialog />
      <div className={`click ${isClickedForAnimation ? "animation" : ""}`}>
        +{MultiClick.current}
      </div>
      <PreBoss
        bossCountForSpawn={bossCountForSpawn}
        setBossCountForSpawn={setBossCountForSpawn}
      />
    </div>
  );
};

export default Crab;
