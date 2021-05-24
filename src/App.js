import React from "react";
import "./App.css";
import MyNavbar from "./components/Navbar/MyNavbar";
import TitleMessage from "./components/TitleMessage/MyTitleMessage.jsx";

const App = () => {
  return (
    <div className="App">
      My Portfolio
      <MyNavbar />
      <TitleMessage />
      <myTitleMessage/>
    </div>
  );
};

export default App;
