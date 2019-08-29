import React from "react";
import logo from "./images/logo_nasa.png";
import "./App.css";
import PictureList from "./components/PictureList.js";



function App() {

  
  
  return (

    <div className="App">
     <img src="../src/images/background.jpg" alt="bckgound" className="bg" />
      <div className="menu">
        <div className="menu_left">
        <div className="nasalogo">
        <img src={logo} alt="Logo" />
        </div>
        <span className="site_title">
         picture of the day
        </span>
      </div>
      <div className="menu_right">

      <span className="text_small">
         July 2020
        </span>
      <span className="text_large">
         HOME
        </span>
      </div>
  </div>
  <div className="main-container">
    
    <PictureList/>
  </div>
    </div>
  );
}

export default App;
