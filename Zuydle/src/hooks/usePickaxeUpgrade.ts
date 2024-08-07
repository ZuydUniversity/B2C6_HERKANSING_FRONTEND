import { useState } from "react";

interface UsePickaxeUpgradeReturn {
  multiplier: number;
  upgradeCount: number;
  upgradePickaxe: (gold: number, setGold: (gold: number) => void) => void;
  calculateUpgradeCost: () => number;
}

const usePickaxeUpgrade = (): UsePickaxeUpgradeReturn => {
  const [multiplier, setMultiplier] = useState(1);
  const [upgradeCount, setUpgradeCount] = useState(0);

  function calculateUpgradeCost() {
    return Math.pow(upgradeCount + 1, 2) * 10;
  }

  function upgradePickaxe(gold: number, setGold: (gold: number) => void) {
    const cost = calculateUpgradeCost();
    if (gold >= cost) {
      setGold(gold - cost);
      setMultiplier(multiplier * 2);
      setUpgradeCount(upgradeCount + 1);
    } else {
      alert('Niet genoeg goud voor upgrade!');
    }
  }

  return {
    multiplier,
    upgradeCount,
    upgradePickaxe,
    calculateUpgradeCost
  };
}

export default usePickaxeUpgrade;