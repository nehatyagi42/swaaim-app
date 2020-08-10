import React from "react";

import "./App.css";
import "./components/sidebar.css";
import Sidebar from "./components/sidebar";
import Header from "./components/navbar";
im
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      
     
    </div>
  );
}

export default App;
{/* <div id="globe" class="globe" style="position: relative; overflow: hidden;">
  <canvas style="width: 100%; height: 100%;" width="1660" height="505"></canvas>
  <div style="position: absolute; bottom: 0px; text-shadow: rgb(0, 0, 0) 0px 0px 2px; color: rgb(255, 255, 255); font-size: 10px; padding-right: 5px;">
    <span class="cesium-credit-imageContainer"></span>
    <span class="cesium-credit-textContainer">
      <span class="cesium-credit-text">NASA</span>
    </span>
  </div>
</div>; */}