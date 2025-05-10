import { useEffect, useState } from "react"
import "./index.css"

function App() {
  const [color, setColor] = useState("black");

  useEffect(()=>{
    document.body.style.backgroundColor=color;
  });

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor:color }}>
      <div className="box">
        <div className="container">
          <div className="colors">
            <button onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>RED</button>
            <button onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow" }}>YELLOW</button>
            <button onClick={() => setColor("green")} style={{ backgroundColor: "green" }}>GREEN</button>
            <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>BLUE</button>
            <button onClick={() => setColor("purple")} style={{ backgroundColor: "purple" }}>PURPLE</button>
            <button onClick={() => setColor("white")} style={{ backgroundColor: "white"}}>WHITE</button>
             <button onClick={() => setColor("pink")} style={{ backgroundColor: "pink"}}>PINK</button>
             <button onClick={() => setColor("orange")} style={{ backgroundColor: "orange"}}>ORANGE</button>
          </div>
        </div>
      </div>
     </div>
  );
}

export default App;






