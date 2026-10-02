import { useEffect, useState, useRef, useContext } from "react";
import "../../styles/global.css";
import "./Castle.css";
import { ClickerContext } from "../../context/ClickerContext";

const Castle = (props) => {
  const { count, setCount } = props;
  const { castleLvl, setCastleLvl } = useContext(ClickerContext);
  // const [castleLvl, setCastleLvl] = useState(0);
  // const [isClicked, setIsClicked] = useState(false);
  let isClicked = false;
  const price = useRef(50);
  let isLvl4 = false;
  let isLvl5 = false;
  let isLvl6 = false;
  let isLvl7 = false;
  let isVisble = false;
  let lvlCount;
  let income = 0;

  useEffect(() => {
    let timerId;
    timerId = setInterval(() => {
      setCount((prev) => prev + income);
    }, 1000);
    return () => clearInterval(timerId);
  }, [castleLvl]);

  if (price.current - 1 >= count) {
    isVisble = true;
  }

  if (castleLvl >= 1) {
    isClicked = true;
  }

  if (castleLvl === 1) {
    income = 1;
    lvlCount = Array.from({ length: castleLvl }, () => "🛕");
    price.current = 150;
  }
  if (castleLvl === 2) {
    lvlCount = Array.from({ length: castleLvl }, () => "🛕");
    price.current = 400;
    income = 4;
  }
  if (castleLvl === 3) {
    lvlCount = Array.from({ length: castleLvl }, () => "🛕");
    price.current = 1000;
    income = 12;
  }
  if (castleLvl === 4) {
    lvlCount = "🛕🛕🛕";
    isLvl4 = true;
    price.current = 2500;
    income = 35;
  }
  if (castleLvl === 5) {
    lvlCount = "🛕🛕🛕";
    isLvl5 = true;
    price.current = 6000;
    income = 100;
  }
  if (castleLvl === 6) {
    lvlCount = "🛕🛕🛕";
    isLvl6 = true;
    price.current = 15000;
    income = 280;
  }
  if (castleLvl === 7) {
    lvlCount = "🛕";
    isLvl7 = true;
    income = 800;
  }

  const onClick = () => {
    if (count >= price.current) {
      setCount(count - price.current);
      setCastleLvl((prev) => prev + 1);
      isClicked = true;
    } else {
      console.log("недостаточно средств");
    }
  };

  return (
    <div>
      <div
        className={`Castle ${isLvl4 ? "lvl4Up" : ""} ${isLvl5 ? "lvl5Up" : ""} ${isLvl6 ? "lvl6Up" : ""} ${isLvl7 ? "lvl7Up" : ""}`}
      >
        {lvlCount}
      </div>





      <button
        className={`button Castle__button__1 ${isClicked ? "none" : ""} ${isVisble ? "none" : ""}`}
        onClick={onClick}
      ></button>










      <div
        className={`Castle__button ${isClicked ? "" : "none"} ${isLvl7 ? "none" : ""} ${isVisble ? "none" : ""}`}
        onClick={onClick}
      >
        ⬆️
      </div>
      <div className={`Castle__text ${isClicked ? "" : "none"}`}>
        lvl:{`${isLvl7 ? "max" : castleLvl} `} <br />
        цена:{`${isLvl7 ? "max" : price.current} `}
        <br /> доход:{income}
      </div>
    </div>
  );
};

export default Castle;
