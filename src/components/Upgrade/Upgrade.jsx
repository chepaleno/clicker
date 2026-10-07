import { useContext, useRef } from "react";
import "./Upgrade.css";
import "../../styles/global.css";
import { ClickerContext } from "../../context/ClickerContext";

const Upgrade = (props) => {
  const { children, count, setCount, price, islvlMax, shellPrice } = props;
  const { dmgLvl, setDmgLvl, shell, setShell } = useContext(ClickerContext);
  const isHaveMoneyForUpgrade = useRef(false);
  const isButtonPressed = useRef(false);
  let isClicked = false;
  let isVisble = false;
  let isVisibleForFirstBtn = false;
  let isVisibleForShell = false;

  if (price - 1 >= count || shellPrice - 1 >= shell) {
    isVisble = true;
  }

  if (shellPrice >= 1) {
    isVisibleForShell = true;
  }

  if (price - 1 >= count) {
    isVisibleForFirstBtn = true;
  }

  if (dmgLvl >= 1) {
    isButtonPressed.current = true;
    isClicked = true;
  }

  const onUpgradeClick = () => {
    if (count >= price && shell >= shellPrice) {
      isHaveMoneyForUpgrade.current = true;
      setDmgLvl((prev) => prev + 1);
      setCount(count - price);
      setShell(shell - shellPrice);
      isClicked = true;
    } else {
      console.log("недостаточно средств");
    }
  };

  return (
    <div>
      <button
        className={`button Castle__button__2 ${isVisibleForFirstBtn ? "none" : ""} ${isClicked ? "none" : ""} `}
        onClick={onUpgradeClick}
      ></button>
      <div className={` crabText ${isButtonPressed.current ? "" : "none"}`}>
        {children} <br />
        🆙lvl:{`${islvlMax ? "max" : dmgLvl} `}
        <br /> 🥮цена:{`${islvlMax ? "max" : price}`}
        <div className={`${isVisibleForShell ? "" : "none"}`}>
          🐚цена:{shellPrice}
        </div>
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
