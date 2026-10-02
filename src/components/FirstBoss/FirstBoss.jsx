import { useContext, useEffect, useRef, useState } from "react";
import "./FirstBoss.css";
import { Navigate, useNavigate } from "react-router-dom";
import Dialog from "../Dialog/Dialog";
import { ClickerContext } from "../../context/ClickerContext";

const FirstBoss = () => {
  const [bossHp, setBossHp] = useState(60);
  const [timer, setTimer] = useState(10);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const { dmgLvl } = useContext(ClickerContext);
  const MultiClick = useRef(1);

  
    switch (dmgLvl) {
    case 1:
      MultiClick.current = 2;
      break;
    case 2:
      MultiClick.current = 4;
      break;
    case 3:
      MultiClick.current = 8;
      break;
    case 4:
      MultiClick.current = 16;
      break;
    case 5:
      MultiClick.current = 32;
      break;
    case 6:
      MultiClick.current = 64;
      break;
    default:
  }

  console.log(MultiClick.current)


  let hp = Array.from({ length: bossHp / 6 }, () => "🟥");
  let timerArr = Array.from({ length: timer }, () => "🟦");

  useEffect(() => {
    //   setTimeout(() => {
    //     navigate("/");
    //     console.log('поражение')
    //   },
    // 10000);

    let timerId;
    timerId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, []); // таймер на босса

  const bossUp = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 50);
  };

  const onClick = () => {
    setBossHp((prev) => prev - MultiClick.current);
    bossUp();
  };

  useEffect(() => {
    // console.log(hp.length);
    if (hp.length <= 0) {
      navigate("/");
      // console.log("Победа");
    }
  }, [bossHp]);

  // console.log(bossHp);

  return (
    <>
      <div className="dialog">
        <Dialog />
      </div>
      <div
        className={`Boss ${isClicked ? "crabClicked" : ""}`}
        onClick={onClick}
      >
        🦐
      </div>
      <div
        className={`CrabB`}
        // onClick={onClick}
      >
        🦀
      </div>
      <div className="hp">❤️ {hp}</div>
      <div className="timer">⏱️ {timerArr}</div>
    </>
  );
};

export default FirstBoss;
