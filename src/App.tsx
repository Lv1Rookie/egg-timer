import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import TimerPage from "./pages/TimerPage";
import Finish from "./pages/Finish";
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/timer/:time" element={<TimerPage />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </Router>
  );
}

export default App;
