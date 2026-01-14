import { useState } from "react";
import "./index.css";
import RoundOne from "./Components/roundDesgin/RoundOne";
import RoundTwo from "./Components/roundDesgin/RoundTwo";
import RoundThree from "./Components/roundDesgin/RoundThree";
import RoundFour from "./Components/roundDesgin/RoundFour";
import RoundFive from "./Components/roundDesgin/RoundFive";
import Home from "./Home";

function App() {
  return (
    <div className="w-full h-screen relative font-bodyFont bg-black text-textColor overflow-x-hidden md:overflow-hidden">
<div className="w-full h-full mx-auto flex justify-center items-center">
  <Home />
</div>



      {/* background */}
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
  
    </div>
  );
}

export default App;
