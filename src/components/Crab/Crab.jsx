import { useState } from "react";

const Crab = () => {
  const [crabText, setCrabText] = useState("Привет, нажми на текст");
  const [chisloClicovPoText, setChisloClicovPoText] = useState(0);
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
        break;
      case 3:
        setCrabText("");
        break;
      default:
    }
  };

  return (
    <div>
      <div className="Crab" 
      // className="crabDiv" 
      // onClick={onClick}
      >🦀</div>
      <div className="characterText" onClick={onTextClick}>
        {crabText}
      </div>
    </div>
  );
};

export default Crab;
