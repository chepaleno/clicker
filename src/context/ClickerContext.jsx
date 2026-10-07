import { createContext, useState } from "react";

export const ClickerContext = createContext({});

export const ClickerProvider = ({ children }) => {
  const initional = JSON.parse(localStorage.getItem('clickerSave')) || {}
  const [count, setCount] = useState(initional.count ?? 0);
  const [shell, setShell] = useState(initional.shell ?? 0)
  const [crabText, setCrabText] = useState(initional.crabText ?? "Привет, нажми на текст");
  const [chisloClicovPoText, setChisloClicovPoText] = useState(initional.chisloClicovPoText ?? 0);
  const [dmgLvl, setDmgLvl] = useState(initional.dmgLvl ?? 0);
  const [castleLvl, setCastleLvl] = useState(initional.castleLvl ?? 0);
  const [bossCount, setBossCount] = useState(initional.bossCount ?? 0);
  const [freeMod, setFreeMod] = useState(initional.freeMod ?? false);


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
    shell,
    setShell,
    bossCount, 
    setBossCount,
    freeMod,
    setFreeMod
  };

  return (
    <ClickerContext.Provider value={value}>{children}</ClickerContext.Provider>
  );
};
//
