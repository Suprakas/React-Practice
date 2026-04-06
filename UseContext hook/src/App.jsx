import './App.css'
import { UserProvider } from './UserContext'
import Home from './Home'


function App(){

  return (
        // Wrap app in tank — all components get access
    <UserProvider>
      <Home/>
    </UserProvider>
  )
}

export default App;