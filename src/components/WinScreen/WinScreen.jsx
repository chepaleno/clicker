import { useContext, useEffect, useState } from "react";
import "./WinScreen.css";
import { ClickerContext } from "../../context/ClickerContext";

const WinScreen = (props) => {
  const { theFinal } = props;
  const [isVisible, setIsVisible] = useState(false);
  const { bossCount, setFreeMod } = useContext(ClickerContext);
  console.log(bossCount);
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);
  let finalFraza = "крабий батя.";
  if (bossCount === 2) {
    finalFraza =
      "... а нет, батю ты пустил на крабовый салат.(это было опционально)";
  }
  const onClick = () => {
    // theFinal = false
    setFreeMod(false);
  };
  // finalFraza =
  //   "... а нет, батю ты пустил на крабовый салат.(это было опционально)";
  // const ewq = "крабий батя.";

  return (
    <div className={`container ${isVisible ? "isVisible" : ""}`}>
      <div className="winDiv">
        Спасибо что играл, это был мой первый рофло-проектик, теперь краб с
        женой крабонессой и детьми крабятами живут долго и счастливо в своём
        замке, и с ними также был {finalFraza} <br />
        <br />В любом случае спасибо за игру!!!
        <span className="autor">
          <br />
          made by: Микро Ивашка
        </span>
        <button className="winButton" onClick={onClick}>
          Свободный режим
        </button>
      </div>
    </div>
  );
};

export default WinScreen;
