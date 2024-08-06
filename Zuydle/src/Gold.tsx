import useGold from "../src/useGold";

function Gold() {
  const {gold} = useGold({strength: 2})
  
  return (
    <>
      <div className="card">
        <button onClick={() => useGold}>Gold {gold}</button>
      </div>
    </>
  );
}

export default Gold;
