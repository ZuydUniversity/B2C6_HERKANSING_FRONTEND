import { useState } from 'react';
import Gold from './Gold';
import PickaxeUpgrade from './PickaxeUpgrade';
import githubLogo from '/githubLogo.svg'
import './App.css';

function App() {
  const [gold, setGold] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [upgradeCount, setUpgradeCount] = useState(0); // Aantal upgrades bijhouden

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
    <div className="app-container">
      <div className="logo-container">
        <a
          href="https://github.com/ZuydUniversity/B2C6_HERKANSING_FRONTEND/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
      </div>
      <Gold gold={gold} onGoldClick={handleGoldClick} />
      <PickaxeUpgrade
        multiplier={multiplier}
        upgradeCount={upgradeCount}
        onUpgradeClick={handleUpgradeClick}
      />
    </div>
  );
}

export default App;
