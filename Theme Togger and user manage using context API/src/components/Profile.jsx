import { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { UserContext } from '../Contexts/UserContext';

export const Profile = () => {
  const { user, updateUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const handleAgeUpdate = () => {
    updateUser({ age: user.age + 1 });
  };

  return (
    <div className={`profile ${theme}`}>
      <h3>Profile</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleAgeUpdate}>Increase Age</button>
    </div>
  );
};