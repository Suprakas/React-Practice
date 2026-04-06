import { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { UserContext } from '../Contexts/UserContext';

export const Navbar = () => {
  const { user } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <h2>Welcome, {user.name}!</h2>
      <button onClick={toggleTheme}>
        Toggle Theme ({theme})
      </button>
    </nav>
  );
};