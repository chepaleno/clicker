import { createContext, useState } from "react";

export const ClickerContext = createContext({});

export const ClickerProvider = ({ children }) => {
  const [count, setCount] = useState(() => {
    const savedClick = localStorage.getItem("save");
    if (savedClick) {
      return +savedClick;
    } else return 0;
  });

  const [crabText, setCrabText] = useState("Привет, нажми на текст");
  const [chisloClicovPoText, setChisloClicovPoText] = useState(0);
  const [dmgLvl, setDmgLvl] = useState(0);
  const [castleLvl, setCastleLvl] = useState(0);

  const value = {
    crabText,
    setCrabText,
    chisloClicovPoText,
    setChisloClicovPoText,
    dmgLvl,
    setDmgLvl,
    castleLvl,
    setCastleLvl,
    count,
    setCount,
  };

  return (
    <ClickerContext.Provider value={value}>{children}</ClickerContext.Provider>
  );
};
//
