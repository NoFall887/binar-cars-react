import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cars from "./pages/Cars";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<Homepage />} index />
          <Route path="cars" element={<Cars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
