import React, { useEffect } from "react";
import { auth } from '../../firebase';
import './style/AboutCom.css';
import { useAuth } from "../../AuthContext";
import { onAuthStateChanged } from 'firebase/auth';

const AboutCom = () => {

    const { user, login, logout } = useAuth(); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                // L'utilisateur est connecté via Firebase
                login(authUser);
            } else {
                // L'utilisateur n'est pas connecté
                logout();
            }
        });
        
        return () => unsubscribe();
    }, [login, logout]);

    return (
        <div className="about-container">
            <h2>La Communication Animale</h2>
            <p className="paragraph">
                La communication animale est un domaine fascinant qui englobe les différents moyens par lesquels les animaux interagissent et échangent des informations entre eux. Cette forme de communication peut revêtir de nombreuses facettes et varier considérablement d'une espèce à l'autre.
            </p>
            <p className="paragraph">
                Les animaux communiquent pour diverses raisons, notamment la sélection de partenaires sexuels, la défense du territoire, la coordination sociale, les signaux d'alarme et l'établissement de hiérarchies sociales. La manière dont la communication est utilisée varie considérablement d'une espèce à l'autre.
            </p>
            <p className="paragraph">
                La communication animale peut être très complexe, avec certaines espèces ayant des systèmes de communication sophistiqués. Cette évolution a conduit à une grande diversité de systèmes de communication parmi les espèces animales.
            </p>
            <p className="paragraph">
                En résumé, la communication animale est un domaine vaste et diversifié qui englobe une multitude de moyens par lesquels les animaux échangent des informations pour survivre, se reproduire et coopérer au sein de leur environnement. Elle représente un aspect fascinant de la biologie et de l'éthologie animale.
            </p>
            {user ? (
                <p className="paragraph">L'utilisateur est connecté.</p>
            ) : (
                <p className="paragraph">L'utilisateur n'est pas connecté.</p>
            )}
        </div>
    );
}

export default AboutCom;
