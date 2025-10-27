import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stair from "./Components/Aimation/Stair";
import NavContext from "./Components/Context/NavContext";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Stair>
      <NavContext>
        <App />
      </NavContext>
    </Stair>
  </BrowserRouter>
);
