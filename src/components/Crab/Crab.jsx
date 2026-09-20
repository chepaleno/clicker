import { useState, useRef, useContext } from "react";
import Upgrade from "../Upgrade/Upgrade";
import "./Crab.css";
import "../Upgrade/Upgrade.css";
import Dialog from "../Dialog/Dialog";
import { ClickerContext } from "../../context/ClickerContext";

const Crab = (props) => {
  const { setCount, count } = props;
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedForAnimation, setIsClickedForAnimation] = useState(false);
  const [clickedLimit, setClickedLimit] = useState(0);
  const [crabColdown, setCrabColdown] = useState(true);
  const [upgradeLvl, setUpgradeLvl] = useState(0);
  const { chisloClicovPoText, setCrabText } = useContext(ClickerContext);

  const crabUp = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 50);
    setIsClickedForAnimation(true);
    setTimeout(() => setIsClickedForAnimation(false), 60);
  };

  const MultiClick = useRef(1);
  const isTheFirstMessage = useRef(true);
  const price = useRef(25);
  let islvlMax = false;

  switch (upgradeLvl) {
    case 1:
      MultiClick.current = 2;
      price.current = 75;
      break;
    case 2:
      MultiClick.current = 4;
      price.current = 225;
      break;
    case 3:
      MultiClick.current = 8;
      price.current = 675;
      break;
    case 4:
      MultiClick.current = 16;
      price.current = 2000;
      break;
    case 5:
      MultiClick.current = 32;
      price.current = 6000;
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
      crabUp();
      if (isTheFirstMessage.current) {
        isTheFirstMessage.current = false;
        setCrabText("Поздравляю с первым кликом");
        setTimeout(() => {
          setCrabText("");
        }, 2000);
      }
      console.log(chisloClicovPoText);
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
          upgradeLvl={upgradeLvl}
          setUpgradeLvl={setUpgradeLvl}
          children={`🔨урон:${MultiClick.current}`}
          count={count}
          price={price.current}
          islvlMax={islvlMax}
        />
      </div>
      <Dialog />
      <div className={`click ${isClickedForAnimation ? "animation" : ""}`}>
        +{MultiClick.current}
      </div>
    </div>
  );
};

export default Crab;
