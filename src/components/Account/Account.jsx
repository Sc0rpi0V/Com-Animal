import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './style/Account.css';
import Menu from './MenuDashboard/Menu';
import { useTranslation } from "react-i18next";

const Account = () => {
  const [user, setUser] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  const [lastLogin, setLastLogin] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {

      if (userAuth) {

        const currentUser = auth.currentUser;
        const userMetadata = currentUser.metadata;

        // Date de création du compte
        const userCreatedAt = userMetadata.creationTime;
        setCreatedAt(userCreatedAt);

        // Date de dernière connexion
        const userLastLogin = userMetadata.lastSignInTime;
        setLastLogin(userLastLogin);

        const userDocRef = doc(firestore, 'Users', userAuth.uid);
        console.log(userDocRef);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser(userData);
          } else {
            console.log('Le document de l\'utilisateur n\'existe pas dans Firestore.');
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des données de l\'utilisateur depuis Firestore:', error);
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='account-container'>
      <Menu />
      <div className='account-content'>
        <h1 className='dashboard-title'>{t('dashboard')}</h1>
        {user ? (
          <div className='dashboard'>
            <p className='connect-user'>L'utilisateur est connecté</p>
            <p>{t('name')}: {user.lastName}</p>
            <p>{t('firstName')}: {user.firstName}</p>
            <p>{t('mail')}: {user.email}</p>
            <p>{t('phoneNumber')}: {user.phoneNumber}</p>
            <div className='tab-dashboard'>
              <div className='connection-info'>
                <h2>{t('connexionInformation')}</h2>
                <div>
                  <p>{t('dateCreationAccount')}: {createdAt && new Date(createdAt).toLocaleString('fr-FR')}</p>
                </div>
                <div>
                  <p>{t('dateLastConnexionAccount')}: {lastLogin && new Date(lastLogin).toLocaleString('fr-FR')}</p>
                </div>
            </div>
              <div className='recent-activity'>
                <h2>{t('recentActivity')}</h2>
              </div>
            </div>
          </div>
        ) : (
          <p>Connectez-vous pour voir les informations du compte.</p>
        )}
      </div>
    </div>
  );
};

export default Account;
