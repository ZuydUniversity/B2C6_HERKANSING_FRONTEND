import React from "react";
import usePickaxeUpgrade from "../hooks/usePickaxeUpgrade";

function PickaxeUpgrade() {
  const { multiplier, upgradeCount, upgradePickaxe, calculateUpgradeCost } =
    usePickaxeUpgrade();

  const cost = calculateUpgradeCost();

  return (
    <div className="card">
      <button onClick={upgradePickaxe}>
        Upgrade Pickaxe (Cost: {cost} Gold) - Current Multiplier: {multiplier} -
        Upgrades: {upgradeCount}
      </button>
    </div>
  );
}

export default PickaxeUpgrade;
