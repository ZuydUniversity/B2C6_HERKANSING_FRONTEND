import { useState } from "react";

interface UseUsernameReturn{
    username: string
}

const useUsername = (userInput="default"): UseUsernameReturn => { 
    const [username, setUsername] = useState(userInput)
    
    function getUsername()
    {  
        setUsername(userInput = username)
    }
    return {username}
}

export default useUsername
