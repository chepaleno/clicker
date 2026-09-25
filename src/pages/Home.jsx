import { useState, useEffect } from "react";
// import { savedClick, saveClick, useLocalStorage } from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import Crab from "../components/Crab/Crab";
import Castle from "../components/Castle/Castle";
import "../styles/global.css";

const Home = (props) => {
  const { count, setCount } = props;

  const buy = () => {
    if (count >= 5) {
      setCount(count - 5);
    }
  };

  const onClick = () => {
    setChisloClicovPoText((prev) => prev + 1);
  };

  return (
    <div
      className={`fullScreenDiv`}
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/a0/bc/ce/a0bcce04cd9c1ce026508369c9de6e03.png?nii=t')",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/boss">Boss</Link>
      <Crab count={count} setCount={setCount} />
      <div>счёт:{count}</div>
      <div onClick={onClick}>след диалов</div>
      <div onClick={buy}>купить</div>
      <Castle count={count} setCount={setCount} />
      <div onClick={() => setCount(count + 1000000)}>+1000</div> {/* читы */}
    </div>
  );
};

export default Home;
