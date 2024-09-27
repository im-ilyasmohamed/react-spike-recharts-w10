import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AreaChartComponent from "./component/AreaChart";
import BarChartComponent from "./component/BarCharts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ backgroundColor: "#0f172a", margin: "10px" }}>
        <AreaChartComponent />
      </div>
      <div style={{ backgroundColor: "lightblue", margin: "10px" }}>
        <BarChartComponent />
      </div>
    </>
  );
}

export default App;
