// Home page of the app

import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1 id="homepage">
        Time for Eggs!<br></br>٩(｡•ㅅ•｡)و
      </h1>
      <button id="start-button" onClick={() => navigate("/menu")}> {/* This button proceeds to the menu page */}
        Start ↪
      </button>
    </div>
  );
};

export default Home;
