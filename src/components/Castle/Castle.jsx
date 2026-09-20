import { useEffect, useState, useRef } from "react";
import "../../styles/global.css";
import "./Castle.css";

const Castle = (props) => {
  const { count, setCount } = props;
  const [castleCount, setCastleCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const price = useRef(50);
  let isLvl4 = false;
  let isLvl5 = false;
  let isLvl6 = false;
  let isLvl7 = false;
  let isVisble = false;
  let lvlCount;
  // let price = 50;
  let income = 0;


  useEffect(() => {
    let timerId;
    timerId = setInterval(() => {
      setCount((prev) => prev + income);
    }, 1000);
    return () => clearInterval(timerId);
  }, [castleCount]);

  if (price.current - 1 >= count) {
    isVisble = true;
  }

  if (castleCount === 1) {
    income = 1;
    lvlCount = Array.from({ length: castleCount }, () => "🛕");
    price.current = 150;
  }
  if (castleCount === 2) {
    lvlCount = Array.from({ length: castleCount }, () => "🛕");
    price.current = 400;
    income = 4;
  }
  if (castleCount === 3) {
    lvlCount = Array.from({ length: castleCount }, () => "🛕");
    price.current = 1000;
    income = 12;
  }
  if (castleCount === 4) {
    lvlCount = "🛕🛕🛕";
    isLvl4 = true;
    price.current = 2500;
    income = 35;
  }
  if (castleCount === 5) {
    lvlCount = "🛕🛕🛕";
    isLvl5 = true;
    price.current = 6000;
    income = 100;
  }
  if (castleCount === 6) {
    lvlCount = "🛕🛕🛕";
    isLvl6 = true;
    price.current = 15000;
    income = 280;
  }
  if (castleCount === 7) {
    lvlCount = "🛕";
    isLvl7 = true;
    income = 800;
  }

  const onClick = () => {
    if (count >= price.current) {
      setCount(count - price.current);
      setCastleCount((prev) => prev + 1);
      setIsClicked(true);
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
        lvl:{`${isLvl7 ? "max" : castleCount} `} <br />
        цена:{`${isLvl7 ? "max" : price.current} `}
        <br /> доход:{income}
      </div>
    </div>
  );
};

export default Castle;
