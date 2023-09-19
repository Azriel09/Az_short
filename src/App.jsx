import { useState } from "react";

import "./App.css";
import Home from "./page/home";
import { Route, Routes } from "react-router-dom";
import Error from "./page/error";
import Nav from "./components/Navbar/nav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="error" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
