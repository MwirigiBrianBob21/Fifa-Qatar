import React from "react"
import ReactDOM from "react-dom/client"

// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import StadiaList from "./stadia_list"
import NewImage from "./new_image"
import NewInternetSpeed from "./new_internet_speed"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/new-image" element={<NewImage />} />
        <Route path="/new-internet-speed" element={<NewInternetSpeed />} />
        <Route path="*" element={<StadiaList />} />
      </Routes>
    </BrowserRouter>
  );
}

// Set up some code that would render react into the DOM
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);