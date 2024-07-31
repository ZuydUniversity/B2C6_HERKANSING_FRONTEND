import React, { useState } from 'react';

function PickaxeUpgrade() {
  const [gold, setGold] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [upgradeCount, setUpgradeCount] = useState(0);

  const handleGoldClick = () => {
    setGold((gold) => gold + multiplier);
  };

  const calculateUpgradeCost = (count: number) => {
    return Math.pow(count + 1, 2) * 10; // Kosten = (aantal upgrades + 1)² * 10
  };

  const handleUpgradeClick = () => {
    const cost = calculateUpgradeCost(upgradeCount);
    if (gold >= cost) {
      setGold((gold) => gold - cost);
      setMultiplier((multiplier) => multiplier * 2);
      setUpgradeCount((count) => count + 1);
    } else {
      alert('Niet genoeg goud voor upgrade!');
    }
  };

  return (
    <div>
      <div className="card">
        <button onClick={handleGoldClick}>
          Gold {gold}
        </button>
      </div>
      <div className="card">
        <button onClick={handleUpgradeClick}>
          Upgrade Pickaxe (Cost: {calculateUpgradeCost(upgradeCount)} Gold) - Current Multiplier: {multiplier}
        </button>
      </div>
    </div>
  );
}

export default PickaxeUpgrade;