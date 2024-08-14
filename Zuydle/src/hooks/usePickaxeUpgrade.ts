import { useState } from "react";
import { useGoldContext } from "../context/GoldContext";

interface UsePickaxeUpgradeReturn {
  multiplier: number;
  upgradeCount: number;
  upgradePickaxe: () => void;
  calculateUpgradeCost: () => number;
}

const usePickaxeUpgrade = (): UsePickaxeUpgradeReturn => {
  const { gold, raiseGold, multiplier, setMultiplier } = useGoldContext();
  const [upgradeCount, setUpgradeCount] = useState(0);

  function calculateUpgradeCost() {
    return Math.pow(upgradeCount + 1, 2) * 50;
  }

  function upgradePickaxe() {
    const cost = calculateUpgradeCost();
    if (gold >= cost) {
      setMultiplier((prevMultiplier) => prevMultiplier * 2);
      setUpgradeCount((prevCount) => prevCount + 1);
      raiseGold(-cost);
    } else {
      alert("Not enough gold for an upgrade!");
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
