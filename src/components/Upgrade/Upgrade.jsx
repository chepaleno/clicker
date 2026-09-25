import { useContext, useRef, useState } from "react";
import "./Upgrade.css";
import "../../styles/global.css";
import { ClickerContext } from "../../context/ClickerContext";

const Upgrade = (props) => {
  const {
    children,
    count,
    setCount,
    price,
    islvlMax,
  } = props;

  const {dmgLvl, setDmgLvl} = useContext(ClickerContext)

  const isHaveMoneyForUpgrade = useRef(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  let isVisble = false;
  
  if (price - 1 >= count) {
    isVisble = true;
  }

  const onUpgradeClick = () => {
    if (count >= price) {
      isHaveMoneyForUpgrade.current = true;
      setDmgLvl((prev) => prev + 1);
      setCount(count - price);
      setIsClicked(true);
      setIsButtonPressed(true);
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

      <div className={`${isButtonPressed ? "" : "none"}`}>
        {children} <br />
        🆙lvl:{`${islvlMax ? "max" : dmgLvl} `} <br /> 🥮цена:
        {`${islvlMax ? "max" : price}`}
      </div>
      <div
        onClick={onUpgradeClick}
        className={`lvlUpButton ${islvlMax ? "none" : ""} ${isVisble ? "none" : ""} ${isButtonPressed ? "" : "none"}`}
      >
        ⬆️
      </div>
    </div>
  );
};

export default Upgrade;
