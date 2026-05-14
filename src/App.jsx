import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Success from "./Success";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/success" element={<Success />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;