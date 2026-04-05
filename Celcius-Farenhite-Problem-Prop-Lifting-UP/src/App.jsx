import { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  function handleCelsiusChange(value) {
    setCelsius(value);
    setFahrenheit(((value * 9) / 5 + 32).toFixed(2));
  }

  function handleFahrenheitChange(value) {
    setFahrenheit(value);
    setCelsius((((value - 32) * 5) / 9).toFixed(2));
  }

  return (
    <div>
      <h2>Temperature Converter</h2>
      <CelsiusInput
        celsius={celsius}
        onCelsiusChange={handleCelsiusChange}
      />
      <FahrenheitInput
        fahrenheit={fahrenheit}
        onFahrenheitChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default App;
