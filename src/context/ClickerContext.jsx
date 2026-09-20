import { createContext, useState } from "react";

export const ClickerContext = createContext({});

export const ClickerProvider = ({ children }) => {
  const [crabText, setCrabText] = useState("Привет, нажми на текст");
  const [chisloClicovPoText, setChisloClicovPoText] = useState(0);

  const value = {
    crabText,
    setCrabText,
    chisloClicovPoText,
    setChisloClicovPoText,
  };

  return (
    <ClickerContext.Provider value={value}>{children}</ClickerContext.Provider>
  );
};
