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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/new-image" element={<NewImage />} />
        <Route path="*" element={<StadiaList />} />
      </Routes>
    </BrowserRouter>
  );
}

// Set up some code that would render react into the DOM
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);