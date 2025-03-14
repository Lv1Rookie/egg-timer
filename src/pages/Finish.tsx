// This is the webpage for when the timer ends

import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Finish.css";

const Finish = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track if the sound is playing

  useEffect(() => {
    const playSound = async () => {
      if (audioRef.current) {
        audioRef.current.loop = true; // Ensure looping
        try {
          await audioRef.current.play();
          setIsPlaying(true); // Mark as playing
        } catch (error) {
          console.error("Autoplay blocked:", error);
        }
      }
    };

    playSound();

    // Clean up when component unmounts
    return () => {
      setIsPlaying(false);
    };
  }, []);

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset playback
      setIsPlaying(false); // Stop the animation
    }
  };

  return (
    <div className="finish">
      <h1 id="finished">Your Eggs Hatched!<br></br>₊⊹(｡•ˇ‸ˇ•｡)</h1>
      <div className="finish-buttons">
        <button
          id="stop-alarm-button"
          onClick={stopSound}
          className={isPlaying ? "vibrating" : ""} // Dynamically add/remove the vibration
        >
          ᶻ 𝗓 𐰁 .ᐟ 
        </button>
        <button
          id="back-button"
          onClick={() => {
            stopSound();
            navigate("/");
          }}
        >
          ↩ Go Back
        </button>
      </div>
      {/* Hidden audio element */}
      <audio ref={audioRef}>
        <source src="/audio/digivicesound.mp3" type="audio/mpeg" />
        Your browser does not support this audio element.
      </audio>
    </div>
  );
};

export default Finish;
