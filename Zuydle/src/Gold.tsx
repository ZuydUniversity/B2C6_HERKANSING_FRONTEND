import { useState } from 'react'

function Gold(){

const [gold, setGold] = useState(0)

return(
    <>
    <div className="card">
        <button onClick={() => setGold((gold) => gold + 1)}>
          Gold {gold}
        </button>
      </div>
    </>
)
}

export default Gold