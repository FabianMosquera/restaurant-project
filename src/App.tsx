import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Restaurant from "./pages/Restaurant";
import { UserContextProvider } from "./context/context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
      <UserContextProvider>
      <Header />
        <Routes>
          <Route path={"/signup"} element={<SignUp />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/restaurant"} element={<Restaurant />} />
        </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
