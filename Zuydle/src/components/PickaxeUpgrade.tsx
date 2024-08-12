import usePickaxeUpgrade from '../hooks/usePickaxeUpgrade';

interface PickaxeUpgradeProps {
  gold: number;
  setGold: (gold: number) => void;
}

function PickaxeUpgrade({ gold, setGold }: PickaxeUpgradeProps) {
  const { multiplier, upgradeCount, upgradePickaxe, calculateUpgradeCost } = usePickaxeUpgrade();

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
