import { useContext, useEffect, useState } from "react";
import "./WinScreen.css";
import { ClickerContext } from "../../context/ClickerContext";

const WinScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { bossCount, setFreeMod } = useContext(ClickerContext);
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);
  let finalFraza = "крабий батя.";
  if (bossCount === 2) {
    finalFraza =
      "... а нет, батю ты пустил на крабовый салат.(это было опционально)";
  }
  const onFinalClick = () => {
    setFreeMod(true);
  };

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
        <button className="winButton" onClick={onFinalClick}>
          Свободный режим
        </button>
      </div>
    </div>
  );
};

export default WinScreen;
