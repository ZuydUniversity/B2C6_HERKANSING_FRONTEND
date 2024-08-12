import { useState } from "react";
import { useGoldContext } from "../context/GoldContext";

interface UsePickaxeUpgradeReturn {
  multiplier: number;
  upgradeCount: number;
  upgradePickaxe: (gold: number, setGold: (gold: number) => void) => void;
  calculateUpgradeCost: () => number;
}

const usePickaxeUpgrade = (): UsePickaxeUpgradeReturn => {
  const { multiplier, setMultiplier } = useGoldContext();
  const [upgradeCount, setUpgradeCount] = useState(0);

  function calculateUpgradeCost() {
    return Math.pow(upgradeCount + 1, 2) * 50;
  }

  function upgradePickaxe(gold: number, setGold: (gold: number) => void) {
    const cost = calculateUpgradeCost();
    if (gold >= cost) {
      setGold(gold - cost);
      setMultiplier((prevMultiplier) => prevMultiplier * 2);
      setUpgradeCount((prevCount) => prevCount + 1);
    } else {
      alert("Niet genoeg goud voor upgrade!");
    }
  }

  return {
    multiplier,
    upgradeCount,
    upgradePickaxe,
    calculateUpgradeCost,
  };
};

export default usePickaxeUpgrade;
