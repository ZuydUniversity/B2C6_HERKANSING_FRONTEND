import React from "react";
import { useGoldContext } from "../context/GoldContext";
import usePickaxeUpgrade from "../hooks/usePickaxeUpgrade";

function PickaxeUpgrade() {
  const { gold, raiseGold } = useGoldContext();
  const { multiplier, upgradeCount, upgradePickaxe, calculateUpgradeCost } =
    usePickaxeUpgrade();

  const cost = calculateUpgradeCost();

  return (
    <div className="card">
      <button onClick={() => upgradePickaxe(gold, raiseGold)}>
        Upgrade Pickaxe (Cost: {cost} Gold) - Current Multiplier: {multiplier} -
        Upgrades: {upgradeCount}
      </button>
    </div>
  );
}

export default PickaxeUpgrade;
