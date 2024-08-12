import { useState } from "react";

interface UseUsernameReturn{
    username: string
}

const useUsername = (userInput="default"): UseUsernameReturn => { 
    const [username, setUsername] = useState(userInput)
    setUsername(userInput)
    return {username}
}

export default useUsername
