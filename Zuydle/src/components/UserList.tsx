import { useEffect, useState } from 'react';

interface User {
    id: number;
    username: string;
}

function UserList() {   
    const [users, setUsers] = useState<User[]>([]); 
 
    useEffect(() => { 
        fetch('http://localhost:5000/api/users') 
            .then(response => response.json()) 
            .then(data => setUsers(data)); 
    }, []);

    return (
        <ul>
            {users.map((user, index) => (    
                <li key={index}>{user.username}</li> 
            ))}
        </ul>
    );
}
export default UserList; 