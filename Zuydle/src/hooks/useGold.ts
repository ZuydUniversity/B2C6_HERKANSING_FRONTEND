import { useState } from "react";

interface UseGoldReturn {
  gold: number;
  raiseGold: (amount: number) => void;
}

const useGold = ({ savedGold = 1 }): UseGoldReturn => {
  const [gold, setGold] = useState(savedGold);

  function raiseGold(amount: number) {
    setGold((gold) => gold + amount);
  }

  return {
    gold,
    raiseGold,
  };
}

export default useGold;
