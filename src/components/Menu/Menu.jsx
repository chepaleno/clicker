import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = (props) => {
  const {
    count,
    setCount,
    shell,
    setShell,
    bossCount,
    setBossCount,
    onDeleteSave,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    requestAnimationFrame(() => setIsVisible(true));
  };

  const closeMenu = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  if (!isOpen) {
    return (
      <button className="menuToggle" onClick={openMenu}>
        ☰ Меню
      </button>
    );
  }

  return (
    <div
      className={`menuContainer ${isVisible ? "isVisible" : ""}`}
      onClick={closeMenu}
    >
      <div className="menuDiv" onClick={(e) => e.stopPropagation()}>
        <h2 className="menuTitle">Меню</h2>

        <div className="menuSection">
          <span className="menuLabel">Прогресс</span>
          <div className="menuStats">
            🥮 {count} &nbsp;|&nbsp; 🐚 {shell} &nbsp;|&nbsp; 👑 {bossCount}
          </div>
        </div>

        <div className="menuSection">
          <span className="menuLabel">Разработка</span>
          <button
            className="menuButton menuButton--gold"
            onClick={() => setCount(count + 1000000)}
          >
            +1000 очков
          </button>
          <button
            className="menuButton menuButton--gold"
            onClick={() => setShell(shell + 100)}
          >
            +100 ракушек
          </button>
          <button
            className="menuButton menuButton--gold"
            onClick={() => setBossCount(bossCount + 1)}
          >
            +1 lvl босса
          </button>
        </div>

        <div className="menuSection">
          <span className="menuLabel">Навигация</span>
          <Link to="/" className="menuButton menuButton--blue">
            🏠 Home
          </Link>
          <Link to="/boss" className="menuButton menuButton--blue">
            ⚔️ Boss
          </Link>
        </div>

        <div className="menuSection">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="menuButton menuButton--ghost"
          >
            Не нажимать
          </a>
        </div>

        <button
          className="menuButton menuButton--red"
          onClick={onDeleteSave}
        >
          🗑️ Удалить сейв
        </button>

        <button className="menuClose" onClick={closeMenu}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Menu;