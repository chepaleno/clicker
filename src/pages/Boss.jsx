import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Boss = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/boss">Boss</Link><br/>
      а Это уже страница босса, ага ага
    </div>
  );
};

export default Boss;
