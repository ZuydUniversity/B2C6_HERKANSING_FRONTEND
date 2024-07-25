import { useState } from "react";

function Gold({strength}: {strength?: number}) {
  const [gold, setGold] = useState(0);
  strength = strength ?? 1

  return (
    <>
      <div className="card">
        <button onClick={() => setGold((gold) => gold + strength!)}>Gold {gold}</button>
      </div>
    </>
  );
}

export default Gold;
