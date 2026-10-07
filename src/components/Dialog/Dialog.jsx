import { useContext } from "react";
import "./Dialog.css";
import { ClickerContext } from "../../context/ClickerContext";

const Dialog = () => {
  const { crabText, setCrabText, chisloClicovPoText, setChisloClicovPoText } =
    useContext(ClickerContext);

  const onTextClick = () => {
    setChisloClicovPoText((prev) => prev + 1);

    switch (chisloClicovPoText) {
      case 0:
        setCrabText("Меня зовут краб");
        break;
      case 1:
        setCrabText("Это игра про меня");
        break;
      case 2:
        setCrabText("Кликай по мне и выигрывай, удачи");
        setTimeout(() => {
          setCrabText("");
        }, 2000);
        break;
      default:
        setCrabText("");
        break;
    }
  };
  return (
    <div className="characterText" onClick={onTextClick}>
      {crabText}
    </div>
  );
};

export default Dialog;
