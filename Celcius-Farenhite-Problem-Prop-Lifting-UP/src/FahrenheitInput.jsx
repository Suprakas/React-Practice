function FahrenheitInput({ fahrenheit, onFahrenheitChange }) {
  return (
    <div>
      <label>Fahrenheit: </label>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => onFahrenheitChange(e.target.value)}
      />
    </div>
  );
}

export default FahrenheitInput;