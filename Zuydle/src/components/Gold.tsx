import useGold from "../hooks/useGold";

function Gold() {
  const {gold, raiseGold} = useGold({savedGold: 1})

  return (
    <>
      <div className="card">
        <button onClick={() => raiseGold(5)}>Gold {gold}</button>
      </div>
    </>
  );
}

export default Gold;
