import { useState } from "react";

import "./App.css";
import Home from "./page/home";
import { Route, Routes } from "react-router-dom";
import Error from "./page/error";

function App() {
  let arr = 10;
  let x = 1;
  function RunTryAgain(i) {
    if (i < arr) {
      console.log(i);
      i++;

      RunTryAgain(i);
    } else {
      return;
    }
  }

  RunTryAgain(x);
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/error" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
