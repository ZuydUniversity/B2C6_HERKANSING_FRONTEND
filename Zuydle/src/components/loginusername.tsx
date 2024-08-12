import React, {useState} from "react";
import useUsername from "../hooks/useUsername";

const UserLoginComponent: React.FC<{}> = () => {

  return (
    <div>
     <input 
          type = "text" 
          onChange ={e => useUsername(e.target.value)}  
          placeholder="Username"/>       
    </div>        
  );
};

export default UserLoginComponent;

