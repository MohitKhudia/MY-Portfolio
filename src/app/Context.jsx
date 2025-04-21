'use client'
import { createContext, useState, useContext, useRef } from 'react';

// Create context
const Context = createContext();
export const AppContext = () => useContext(Context);


export const Provider = ({ children }) => {
  const [Isopen, setIsopen] = useState(false);
  const contactRef = useRef(null); 
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const supply = {
        Isopen , setIsopen ,contactRef , scrollToContact
  }
  return (
    <Context.Provider value={supply}>
      {children}
    </Context.Provider>
  );
};

// Custom hook for using the context
