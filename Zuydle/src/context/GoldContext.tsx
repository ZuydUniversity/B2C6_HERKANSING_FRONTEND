import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GoldContextType {
  gold: number;
  raiseGold: (amount: number) => void;
  multiplier: number;
  setMultiplier: (multiplier: (prevMultiplier: number) => number) => void;
}

const GoldContext = createContext<GoldContextType | undefined>(undefined);

export const GoldProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gold, setGold] = useState(1);
  const [multiplier, setMultiplier] = useState(1);

  const raiseGold = (amount: number) => {
    setGold(prevGold => prevGold + amount);
  };

  return (
    <GoldContext.Provider value={{ gold, raiseGold, multiplier, setMultiplier }}>
      {children}
    </GoldContext.Provider>
  );
};

export const useGoldContext = () => {
  const context = useContext(GoldContext);
  if (context === undefined) {
    throw new Error('useGoldContext must be used within a GoldProvider');
  }
  return context;
};
