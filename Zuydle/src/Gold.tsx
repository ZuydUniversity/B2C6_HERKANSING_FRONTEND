import React from 'react';

interface GoldProps {
  gold: number;
  onGoldClick: () => void;
}

function Gold({ gold, onGoldClick }: GoldProps) {
  return (
    <div className="card">
      <button onClick={onGoldClick}>
        Gold {gold}
      </button>
    </div>
  );
}

export default Gold;
