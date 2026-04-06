import { ThemeProvider } from './Contexts/ThemeContext';
import { UserProvider } from './Contexts/UserContext';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';


export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <div className="app">
          <Navbar />
          <Profile />
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}