import React, { useState } from "react";

const colors = ["red", "green", "blue"];
export default function Map() {
  //lets create a simple color picker using the colors that we have

  const [colorPick, setColorPick] = useState("tomato");
  // first lets create a array of data
  const colur = { backgroundColor: colorPick };
  return (
    <div style={colur}>

      <h1>this will be the mapping component</h1>
      mapping the colors from the array
      {colors.map((colr)=>{})}
    </div>
  );
}
