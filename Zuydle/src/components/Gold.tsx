import React from 'react';
import { useGoldContext } from '../context/GoldContext';

function Gold() {
  const { gold, raiseGold, multiplier } = useGoldContext();

  return (
    <div className="card">
      <button onClick={() => raiseGold(1 * multiplier)}>Gold {gold}</button>
    </div>
  );
}

export default Gold;
