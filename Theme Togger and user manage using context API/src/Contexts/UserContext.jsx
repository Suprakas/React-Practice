import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ 
    name: "Suprakash", 
    age: 25 
  });

  const updateUser = (newData) => {
    setUser(prev => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};