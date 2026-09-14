import { useState } from "react";
import Crab from "./components/Crab/Crab";
import Castle from "./components/Castle/Castle";
import "./components/Crab/Crab.css";
import "./styles/global.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  // const [crabText, setCrabText] = useState("Привет, нажми на текст");
  // const [chisloClicovPoText, setChisloClicovPoText] = useState(0);

  const crabUp = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 50);
  };

  const onClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
    crabUp();
  };

  // const onTextClick = () => {
  //   setChisloClicovPoText((prev) => prev + 1);

  //   switch (chisloClicovPoText) {
  //     case 0:
  //       setCrabText("Меня зовут краб");
  //       break;
  //     case 1:
  //       setCrabText("Это игра про меня");
  //       break;
  //     case 2:
  //       setCrabText("Кликай по мне и выигрывай, удачи");
  //       break;
  //     case 3:
  //       setCrabText("");
  //       break;
  //     default:
  //   }
  // };

  const buy = () => {
    if (count >= 5) {
      setCount(count - 5);
    }
  };

  return (
    <div
      className={`fullScreenDiv ${isClicked ? "crabClicked" : ""}`}
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/a0/bc/ce/a0bcce04cd9c1ce026508369c9de6e03.png?nii=t')",
      }}
    >
      {/* <div className="characterText" onClick={onTextClick}>
        {crabText}
      </div> */}
      <div className="crabDiv" onClick={onClick}>
        <Crab />
      </div>
      <div>счёт:{count}</div>
      <div>Включить автокликер</div>
      <div onClick={buy}>купить</div>
      <Castle count={count} setCount={setCount} />
      <div onClick={() => setCount(count + 1000000)}>+1000</div> {/* читы */}
    </div>
  );
};

export default App;
