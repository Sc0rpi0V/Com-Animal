import React, { useEffect } from "react";
import { auth } from '../../firebase';
import './style/AboutCom.css';
import { useAuth } from "../../AuthContext";
import { onAuthStateChanged } from 'firebase/auth';
import { useTranslation } from "react-i18next";

const AboutCom = () => {

    const { user, login, logout } = useAuth(); 
    const { t } = useTranslation();

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
            <h2>{t('animalComTitle')}</h2>
            <p className="paragraph">{t('firstpAnimalCom')}</p>
            <p className="paragraph">{t('secondpAnimalCom')}</p>
            <p className="paragraph">{t('thirdpAnimalCom')}</p>
            <p className="paragraph">{t('fourthpAnimalCom')}</p>
            {user ? (
                <p className="paragraph">L'utilisateur est connecté.</p>
            ) : (
                <p className="paragraph">L'utilisateur n'est pas connecté.</p>
            )}
        </div>
    );
}

export default AboutCom;
