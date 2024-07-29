import useGold from '../src/useGold';

function Gold() {

  return (
    <>
      <div className="card">
        <button onClick={() => useGold}>Gold {gold}</button>
      </div>
    </>
  );
}

export default Gold;
