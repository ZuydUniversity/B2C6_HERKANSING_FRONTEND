import React from 'react';

interface PickaxeUpgradeProps {
  gold: number;
  setGold: (gold: number) => void;
  upgradePickaxe: (gold: number, setGold: (gold: number) => void) => void;
  calculateUpgradeCost: () => number;
  multiplier: number;
  upgradeCount: number;
}

function PickaxeUpgrade({ gold, setGold, upgradePickaxe, calculateUpgradeCost, multiplier, upgradeCount }: PickaxeUpgradeProps) {
  const cost = calculateUpgradeCost();

  return (
    <div className="card">
      <button onClick={() => upgradePickaxe(gold, setGold)}>
        Upgrade Pickaxe (Cost: {cost} Gold) - Current Multiplier: {multiplier} - Upgrades: {upgradeCount}
      </button>
    </div>
  );
}

export default PickaxeUpgrade;
