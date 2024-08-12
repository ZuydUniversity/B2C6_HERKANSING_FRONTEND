import React from "react";
import githubLogo from "/githubLogo.svg";
import "./App.css";
import Gold from "./components/Gold";
import PickaxeUpgrade from "./components/PickaxeUpgrade";
import useGold from "./hooks/useGold";
import usePickaxeUpgrade from "./hooks/usePickaxeUpgrade";

function App() {
  const { gold, raiseGold } = useGold({ savedGold: 1 });
  const { multiplier, upgradeCount, upgradePickaxe, calculateUpgradeCost } =
    usePickaxeUpgrade();

  return (
    <>
      <div>
        <a
          href="https://github.com/ZuydUniversity/B2C6_HERKANSING_FRONTEND/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} className="logo" alt="Github logo" />
        </a>
      </div>
      <Gold gold={gold} raiseGold={raiseGold} multiplier={multiplier} />
      <PickaxeUpgrade
        gold={gold}
        setGold={raiseGold}
        upgradePickaxe={upgradePickaxe}
        calculateUpgradeCost={calculateUpgradeCost}
        multiplier={multiplier}
        upgradeCount={upgradeCount}
      />
    </>
  );
}

export default App;
