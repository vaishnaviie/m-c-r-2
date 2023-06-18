import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Archives from "./pages/archives/Archives";
import { Popup } from "./component/popUp/Popup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archives />} />
      </Routes>
    </div>
  );
}

export default App;
