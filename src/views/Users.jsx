import { useEffect, useState } from 'react';
import "./style/Users.css";

const Users = () => {

    const [users, setUsers] = useState([]);

    const saveUsers = async (usersCollection) => {
        localStorage.setItem('users', JSON.stringify(usersCollection));
        setUsers(usersCollection);
    }

    useEffect(() => {
        // Fetch users
        if (localStorage.getItem('users') === null) {
            saveUsers([]);
        } else {
            setUsers(JSON.parse(localStorage.getItem('users')));
        }
    }, []);

    if(users.length === 0) {
        return <p>No users found</p>
    }

    return (<div>
        <ul>{users?.map((user) => {
            return <li key={user.id} className="carduser">
                <div className="param"> Id :</div>{user.id}
                <div className="param"> Civilite :</div>{user.civilite}
                <div className="param"> Nom :</div>{user.nomFamille}
                <div className="param"> Prenom :</div>{user.prenom}
                <div className="param"> Email :</div>{user.email}
                <div className="param"> Adresse :</div>{user.address}
                <div className="param"> Ville :</div>{user.ville}
                <div className="param"> Code Postal :</div>{user.postal}
                <div className="param"> Phone :</div>{user.phone}
              <button>Delete</button>
            </li>
        })}
        </ul>
    </div>);
}

export default Users;