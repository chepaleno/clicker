import { useContext, useEffect, useRef } from "react";
import { ClickerContext } from "../../context/ClickerContext";
import "./PreBoss.css";
import { Link } from "react-router-dom";

const PreBoss = (props) => {
  const { bossCountForSpawn } = props;
  const { setCrabText, bossCount } = useContext(ClickerContext);
  const isVisible = useRef(false);
  const isVisibleSec = useRef(false);

  useEffect(() => {
    if (bossCount === 0) {
      if (bossCountForSpawn === 30) {
        setCrabText("Ты чувствуешь чьё-то злобное внимание...");
        setTimeout(() => {
          setCrabText("");
        }, 2000);
      }
      if (bossCountForSpawn >= 45 && bossCountForSpawn < 60) {
        isVisible.current = true;
      }
      if (bossCountForSpawn >= 60) {
        isVisible.current = false;
        isVisibleSec.current = true;
      }
    }
    if (bossCount === 1) {
      if (bossCountForSpawn === 60) {
        setCrabText("Ты чувствуешь дрожь из под земли...");
        setTimeout(() => {
          setCrabText("");
        }, 2000);
      }
      if (bossCountForSpawn >= 90 && bossCountForSpawn < 120) {
        isVisible.current = true;
      }
      if (bossCountForSpawn >= 120) {
        isVisible.current = false;
        isVisibleSec.current = true;
      }
    }
    if (bossCount === 2) {
      if (bossCountForSpawn === 150) {
        setCrabText("Воздух вокруг холодеет...");
        setTimeout(() => {
          setCrabText("");
        }, 2000);
      }
      if (bossCountForSpawn >= 200 && bossCountForSpawn < 300) {
        isVisible.current = true;
      }
      if (bossCountForSpawn >= 300) {
        isVisible.current = false;
        isVisibleSec.current = true;
      }
    }
  }, [bossCountForSpawn]);

  const onClick = () => {
    if (bossCount === 0) {
      setCrabText("пипец тебе криветка");
      setTimeout(() => {
        setCrabText("");
      }, 2000);
    }
        if (bossCount === 1) {
      setCrabText("я тебя на салат пущу");
      setTimeout(() => {
        setCrabText("");
      }, 2000);
    }
        if (bossCount === 2) {
      setCrabText("Отец?...");
      setTimeout(() => {
        setCrabText("");
      }, 2000);
    }
  };

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
