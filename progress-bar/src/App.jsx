import { useEffect, useState } from "react";
import "./App.css";

const ProgressBar = ({ progress }) => {

  const[animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 300)
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          //width: `${animatedProgress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
        role="Progress-Bar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};
function App() {
  const bars = [1, 5, 10, 15, 20, 25, 30, 45, 60, 70, 80, 90, 95];
  return (
    <div className="App">
      <h2>Progress bar</h2>
      {bars.map((bar) => (
        <ProgressBar key={bar} progress={bar} />
      ))}
    </div>
  );
}

export default App;
