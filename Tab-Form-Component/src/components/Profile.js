const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  const handleDataChange = (e, item) => {
    setData((prevData) => ({
      ...prevData,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Type your name here"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          placeholder="Type your name here"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>

      <div>
        <label>Email : </label>
        <input
          type="text"
          placeholder="Type your name here"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
