function CelsiusInput({ celsius, onCelsiusChange }) {
  return (
    <div>
      <label>Celsius: </label>
      <input
        type="number"
        value={celsius}
        onChange={(e) => onCelsiusChange(e.target.value)}
      />
    </div>
  );
}

export default CelsiusInput;