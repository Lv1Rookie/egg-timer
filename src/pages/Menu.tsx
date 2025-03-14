// Menu page for each egg timer selection
import { useNavigate } from "react-router-dom";
import "../styles/Menu.css";

const Menu = () => {
  const navigate = useNavigate();
  
  const timerOptions = [
	{ label: "Dippy", time: 3 },
    { label: "Runny", time: 6 },
    { label: "Soft", time: 8 },
    { label: "Hard", time: 10 },
    { label: "Overcooked", time: 15 },
  ];
  
  return (
    <div className="menu">
      <h1 id="question">(୨୧• ꒳ •)₊˚⊹♡ Today's Egg Special:</h1>
      <div className="buttons">
        {timerOptions.map(({ label, time }) => (
          <button id="timer-selection" key={time} onClick={() => navigate(`/timer/${time}`)}>
            {label} ({time} min)
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
