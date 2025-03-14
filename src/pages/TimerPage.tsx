import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/TimerPage.css";

const TimerPage = () => {
  const { time } = useParams<{ time: string }>();
  const initialTime = Number(time) * 60;
  const [seconds, setSeconds] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const [hasReset, setHasReset] = useState(true); // Tracks if the timer was reset
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 0) navigate("/finish");
  }, [seconds, navigate]);

  const handleReset = () => {
    setSeconds(initialTime);
    setIsRunning(false);
    setHasReset(true);
  };

  return (
    <div className="timer">
      <h1 id="time-remain">૮₍ ˶•⤙•˶ ₎ა<br></br>Time Remaining:</h1>
      <h1 id="countdown">
        {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, "0")}
      </h1>
      <div className="timer-buttons">
        <button
          id="toggle-button"
          onClick={() => {
            setIsRunning((prev) => !prev);
            setHasReset(false);
          }}
        >
          {isRunning ? "Stop" : hasReset ? "Start" : "Resume"}
        </button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => navigate("/menu")}>Back</button>
      </div>
    </div>
  );
};

export default TimerPage;
