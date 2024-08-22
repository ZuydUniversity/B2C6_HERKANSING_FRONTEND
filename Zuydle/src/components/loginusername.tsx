// Dit component pakt de user input en geeft het aan de setUsername prop vanuit de parent (LoginPage)
interface UserFieldProps
{
  setUsername: (n:string) => void; 
}

const UserLoginComponent: React.FC<UserFieldProps> = ({setUsername}) => {

  return (
    <div>
     <input 
          type = "text" 
          onChange ={e => setUsername(e.target.value)}  
          placeholder="Username"/>       
    </div>        
  );
};

export default UserLoginComponent;

