import { useContext, useEffect, useRef } from "react";
import { ClickerContext } from "../../context/ClickerContext";
import "./PreBoss.css";
import { Link } from "react-router-dom";

const PreBoss = (props) => {
  const { bossCount } = props;
  const { setCrabText } = useContext(ClickerContext);
  const isVisible = useRef(false);
  const isVisibleSec = useRef(false);

  useEffect(() => {
    if (bossCount === 30) {
      setCrabText("Ты чувствуешь чьё-то злобное внимание...");
      setTimeout(() => {
        setCrabText("");
      }, 2000);
    }
    if (bossCount >= 45 && bossCount < 60) {
      isVisible.current = true;
    }
    if (bossCount >= 60) {
      isVisible.current = false;
      isVisibleSec.current = true;
    }
  }, [bossCount]);

  const onClick = () => {
    setCrabText("пипец тебе криветка");
          setTimeout(() => {
        setCrabText("");
      }, 2000);
  }

  return (
    <div>
      <div className={`preBossButton ${isVisible.current ? "" : "none"}`}>
        🌊🌊🌊
      </div>

      <Link
        to="/boss"
        className={`bossButton ${isVisibleSec.current ? "" : "none"}`}
        onClick={onClick}
      >
        🌊 Выход в море
      </Link>
    </div>
  );
};

export default PreBoss;
