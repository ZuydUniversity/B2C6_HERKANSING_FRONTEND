import { useEffect, useState } from 'react';

function UserList() {   
    const [users, setUsers] = useState([]); 
 
    useEffect(() => { 
        fetch('http://localhost:5000/api/users') 
            .then(response => response.json()) 
            .then(data => setUsers(data)); 
    }, []);

    return (
        <ul>
            {users.map((users, index) => (    
                <li key={index}>{users}</li> 
            ))}
        </ul>
    );
}
export default UserList; 