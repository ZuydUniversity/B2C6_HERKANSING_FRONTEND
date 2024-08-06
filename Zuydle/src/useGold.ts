import { useState } from "react";

function useGold({strength = 1}: {strength?: number})
{
    const [gold, setGold] = useState(0); //not sure if I can just use useState on it's own. TODO: look that shit up

    setGold((gold) => gold + strength)
    return {gold}
}

export default useGold;