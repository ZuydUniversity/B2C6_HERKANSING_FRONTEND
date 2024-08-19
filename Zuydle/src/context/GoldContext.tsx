import React, { createContext, useContext, useState, ReactNode } from "react";

// Definieer een TypeScript interface voor de contextwaarde
interface GoldContextType { 
  gold: number; // De huidige hoeveelheid goud die de speler heeft
  raiseGold: (amount: number) => void; // Functie om de hoeveelheid goud te verhogen met een bepaald bedrag
  multiplier: number; // De vermenigvuldigingsfactor voor goud per klik
  setMultiplier: (multiplier: (prevMultiplier: number) => number) => void; // Functie om de multiplier aan te passen op basis van de huidige waarde
}

// Maak de context aan met een type die overeenkomt met GoldContextType of undefined
const GoldContext = createContext<GoldContextType | undefined>(undefined);

export const GoldProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gold, setGold] = useState(1); // Initialiseer de hoeveelheid goud op 1
  const [multiplier, setMultiplier] = useState(1); // Initialiseer de multiplier op 1

  // Functie om de hoeveelheid goud te verhogen met een bepaald bedrag
  const raiseGold = (amount: number) => { 
    setGold((prevGold) => prevGold + amount); 
    // Verhoog de huidige hoeveelheid goud (prevGold) met het opgegeven bedrag (amount)
  };

  return (
    <GoldContext.Provider
      value={{ gold, raiseGold, multiplier, setMultiplier }}
    >
      {children} 
      {/* Render de kinderen van deze provider.
          De componenten binnen deze provider hebben toegang tot gold, raiseGold, multiplier en setMultiplier */}
    </GoldContext.Provider>
  );
};

// Custom hook voor het ophalen van de contextwaarde
export const useGoldContext = () => { 
  const context = useContext(GoldContext);
  if (context === undefined) {
    throw new Error("useGoldContext must be used within a GoldProvider");
    // Gooi een fout als de hook wordt gebruikt buiten de GoldProvider
  }
  return context;
};
