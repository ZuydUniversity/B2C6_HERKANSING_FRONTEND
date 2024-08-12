import React from "react";

interface GoldProps {
  gold: number;
  raiseGold: (amount: number) => void;
  multiplier: number;
}

function Gold({ gold, raiseGold, multiplier }: GoldProps) {
  return (
    <div className="card">
      <button onClick={() => raiseGold(1 * multiplier)}>Gold {gold}</button>
    </div>
  );
}

export default Gold;
