import { useContext, useEffect, useRef, useState } from "react";
import "./FirstBoss.css";
import { Navigate, useNavigate } from "react-router-dom";
import Dialog from "../Dialog/Dialog";
import { ClickerContext } from "../../context/ClickerContext";

const FirstBoss = (props) => {
  const { setIsMuted, audioRef } = props;
  const [bossHp, setBossHp] = useState(230);
  const [timer, setTimer] = useState(10);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const { dmgLvl, setCrabText, shell, setShell, bossCount, setBossCount } =
    useContext(ClickerContext);
  const MultiClick = useRef(1);

  useEffect(() => {
    if (bossCount === 1) {
      setBossHp(900);
    }
  }, []);
  useEffect(() => {
    if (bossCount === 2) {
      setBossHp(1500);
    }
  }, []);

  console.log(bossHp);

  const bossArray = [
    { bossEmoji: "🦐", delitelPoloskiHp: 23 },
    { bossEmoji: "🐙", delitelPoloskiHp: 90 },
    { bossEmoji: "🦀", delitelPoloskiHp: 20 },
  ];

  // console.log(firstBossArray[0].pivo)
  // console.log(bossArray[0].pivo)

  // console.log(bossArray)

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

  // console.log(MultiClick.current)

  let hp = Array.from(
    { length: bossHp / bossArray[bossCount].delitelPoloskiHp },
    () => "🟥",
  );
  let timerArr = Array.from({ length: timer }, () => "🟦");

  // let intervalId;
  // useEffect(() => {
  //   intervalId = setTimeout(() => {
  //     navigate("/");
  //     console.log("поражение");
  //   }, 10000);
  //   clearInterval(intervalId);

  // }, [bossHp]); // таймер на босса настоящий я в душе не *** как он работает. а он и не работет)))

  // console.log(hp.length <= 0);

  useEffect(() => {
    let timerId2;
    timerId2 = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId2);
  }, []); // таймер на босса декоративный

  if (timer === 0) {
    navigate("/");
    console.log("поражение");
    setCrabText("Я ещё вернусь...");
    setTimeout(() => {
      setCrabText("Улучшение клешни увеличивает урон");
    }, 2000);
    setTimeout(() => {
      setCrabText("");
    }, 4000);
  }

  const bossUp = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 50);
  };

  const onClick = () => {
    setBossHp((prev) => prev - MultiClick.current);
    bossUp();

    setIsMuted(false);
    audioRef.current.play();
    audioRef.current.volume = 0.03;
  };

  useEffect(() => {
    // console.log(hp.length);
    if (hp.length <= 0) {
      navigate("/");
      console.log("победа");
      if (bossCount !== 2) {
        setCrabText("С победой +1🐚");
        setBossCount(bossCount + 1);
        setShell(shell + 1);
      }
      if (bossCount === 2) {
        setCrabText("Как-то странноя я себя чуствую");
      }
      setTimeout(() => {
        setCrabText("");
      }, 2000);
    }
  }, [bossHp]);

  // console.log(bossCount);

  return (
    <>
      <div className="dialog">
        <Dialog />
      </div>
      <div
        className={`Boss ${isClicked ? "crabClicked" : ""}`}
        onClick={onClick}
      >
        {bossArray[bossCount].bossEmoji}
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
