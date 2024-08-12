import React, {useState} from "react";

const UserLoginComponent: React.FC<{}> = () => {
  const[username, setUsername] = useState('')

  // React input handler that updates the hook
  const handleInputChange = 
  (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
  };

  return (
    <div>
     <input type = "text" value={username} 
          onChange ={handleInputChange}  
          placeholder="Username"/>       
    </div>        
  );
};

export default UserLoginComponent;

