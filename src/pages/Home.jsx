import { useState, useEffect, useRef } from "react";
// import { savedClick, saveClick, useLocalStorage } from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import Crab from "../components/Crab/Crab";
import Castle from "../components/Castle/Castle";
import "../styles/global.css";
import mus from "../assets/mus/bgm.mp3";

const Home = (props) => {
  const { count, setCount } = props;
  const [isMuted, setIsMuted] = useState(true)
const audioRef = useRef(null)
// let volume = false
  const buy = () => {
    if (count >= 5) {
      setCount(count - 5);
    }
  };

  const onClick = () => {
    localStorage.clear();
  };

  console.log(isMuted)

  return (
    <div
      className={`fullScreenDiv`}
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/a0/bc/ce/a0bcce04cd9c1ce026508369c9de6e03.png?nii=t')",
      }}
    >
      <audio ref={audioRef} 
      // controls autoPlay
       muted={isMuted} src={mus}></audio>
      <Link to="/">Home</Link>
      <Link to="/boss">Boss</Link>
      <Crab count={count} setCount={setCount} setIsMuted={setIsMuted} 
      audioRef={audioRef} 
      />
      <div>счёт:{count}</div>
      <div onClick={onClick}>удалить сейв</div>
      <div onClick={buy}>купить</div>
      <Castle count={count} setCount={setCount} />
      <div onClick={() => setCount(count + 1000000)}>+1000</div> {/* читы */}
    </div>
  );
};

export default Home;
