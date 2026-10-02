import { useContext, useRef, useState } from "react";
import "./Upgrade.css";
import "../../styles/global.css";
import { ClickerContext } from "../../context/ClickerContext";

const Upgrade = (props) => {
  const { children, count, setCount, price, islvlMax } = props;
  const { dmgLvl, setDmgLvl } = useContext(ClickerContext);
  const isHaveMoneyForUpgrade = useRef(false);
  const isButtonPressed = useRef(false)
  let isClicked = false;
  let isVisble = false;

  if (price - 1 >= count) {
    isVisble = true;
  }

  if (dmgLvl >= 1) {
    isButtonPressed.current = true;
    isClicked = true
  }

  const onUpgradeClick = () => {
    if (count >= price) {
      isHaveMoneyForUpgrade.current = true;
      setDmgLvl((prev) => prev + 1);
      setCount(count - price);
      isClicked = true
    } else {
      console.log("недостаточно средств");
    }
  };

  return (
    <div>
      <button
        className={`button Castle__button__2 ${isVisble ? "none" : ""} ${isClicked ? "none" : ""} `}
        onClick={onUpgradeClick}
      ></button>

      <div className={`${isButtonPressed.current ? "" : "none"}`}>
        {children} <br />
        🆙lvl:{`${islvlMax ? "max" : dmgLvl} `} <br /> 🥮цена:
        {`${islvlMax ? "max" : price}`}
      </div>
      <div
        onClick={onUpgradeClick}
        className={`lvlUpButton ${islvlMax ? "none" : ""} ${isVisble ? "none" : ""} ${isButtonPressed.current ? "" : "none"}`}
      >
        ⬆️
      </div>
    </div>
  );
};

export default Upgrade;
