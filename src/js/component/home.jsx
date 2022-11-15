import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
  const [selectedColor, setSelectedColor] = useState("blue");
  let Color = 'bg-secondary rounded-circle';
  console.log(selectedColor)
  return (
    <div className="traffic-light">
      <div
        onClick={() => setSelectedColor("ligh")}
        className={
          selectedColor === "ligh" ? `red glow light ` : "light"
        }
      ></div>
	   <div
        onClick={() => setSelectedColor("low")}
        className={
          selectedColor === "low" ? `yellow glower light ` : "light"
        }
      ></div> 
	   <div
        onClick={() => setSelectedColor("bow")}
        className={
          selectedColor === "bow" ? `green glowy light ` : "light"
        }
      ></div>
       
      
    </div>
  );
}

export default Home;
