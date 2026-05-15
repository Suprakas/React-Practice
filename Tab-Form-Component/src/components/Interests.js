const Interests = ({ data, setData, errors }) => {
  const { interests } = data;
  const handleDataChange = (e, name) => {
    setData((prevData) => ({
      ...prevData,
      interests: e.target.checked
        ? [...prevData.interests, e.target.name]
        : prevData.interests.filter((i) => i !== e.target.name),
    }));
  };
  console.log(interests);
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          />
          music
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="football"
          checked={interests.includes("football")}
          onChange={handleDataChange}
        />
        <label>Football</label>
      </div>

      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interests;
