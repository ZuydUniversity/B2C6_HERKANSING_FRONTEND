import { useState } from "react";

function useGold({strength}: {strength?: number})
{
    const [gold, setGold] = useState(0);
    strength = strength ?? 1

    setGold((gold) => gold + strength!)
    return {gold}
}

export default useGold;