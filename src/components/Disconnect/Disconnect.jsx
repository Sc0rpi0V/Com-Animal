import React from "react";
import { auth } from '../../firebase'; 
import { useNavigate } from 'react-router-dom';
import './style/Disconnect.css';

const Disconnect = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            navigate('/authconfirm');
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
    };

    return (
        <div>
            <button onClick={handleSignOut}>Déconnexion</button>
        </div>
    );
}

export default Disconnect;
