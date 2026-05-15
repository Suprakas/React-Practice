const Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleDataChange = (e) => {
    setData((prevData) => ({ ...prevData, theme: e.target.name }));
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={handleDataChange}
        />
        <label>Dark</label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={handleDataChange}
        />
        <label>Light</label>
      </div>
    </div>
  );
};

export default Settings;
