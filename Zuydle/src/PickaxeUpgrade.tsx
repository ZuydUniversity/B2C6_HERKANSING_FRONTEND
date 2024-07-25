import React from 'react';

interface PickaxeUpgradeProps {
  multiplier: number;
  upgradeCount: number; // Voeg upgradeCount toe aan de props
  onUpgradeClick: () => void;
}

function PickaxeUpgrade({ multiplier, upgradeCount, onUpgradeClick }: PickaxeUpgradeProps) {
  // Bereken de kosten voor de huidige upgrade
  const calculateUpgradeCost = (count: number) => {
    return Math.pow(count + 1, 2) * 10; // Kosten = (aantal upgrades + 1)² * 10
  };

  const cost = calculateUpgradeCost(upgradeCount);

  return (
    <div className="card">
      <button onClick={onUpgradeClick}>
        Upgrade Pickaxe (Cost: {cost} Gold) - Current Multiplier: {multiplier}
      </button>
    </div>
  );
}

export default PickaxeUpgrade;
