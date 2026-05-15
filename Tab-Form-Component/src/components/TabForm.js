import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {
  const [data, setData] = useState({
    name: "Suprakash",
    age: 28,
    email: "abc@gmail.com",
    interests: ["coding", "football"],
    theme: "dark",
  });

  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});
  const Tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one interest";
        }
        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = Tabs[activeTab].component;

  const handleNextClick = () => {
    const isValid = Tabs[activeTab].validate
      ? Tabs[activeTab].validate()
      : true;

    if (isValid) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };
  const handleSubmitClick = () => {
    //Make Api Call
    console.log(data);
  };
  return (
    <>
      <div className="heading-container">
        {Tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < Tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === Tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </>
  );
};

export default TabForm;
