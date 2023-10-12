import React, { useEffect } from "react";
import './style/Account.css';
import { auth } from '../../firebase';
import { useAuth } from "../../AuthContext";
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';

const Account = () => {
    const { user, login, logout } = useAuth(); 

    const fetchUserDataFromFirestore = async (uid) => {
        const userDocRef = doc(firestore, 'Users', uid);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log('Données de l\'utilisateur récupérées depuis Firestore :', userData);
            return userData;
          } else {
            console.log('Le document de l\'utilisateur n\'existe pas dans Firestore.');
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des données de l\'utilisateur depuis Firestore:', error);
        }
        return null;
      };    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            if (authUser) {
                const userData = await fetchUserDataFromFirestore(authUser.uid);
                // L'utilisateur est connecté via Firebase
                login(authUser);

                if (userData) {
                    login({ ...authUser, ...userData });
                }
            } else {
                // L'utilisateur n'est pas connecté
                logout();
            }
        });
        
        return () => unsubscribe();
    }, [login, logout]);

    console.log(user);

    return (
        <>
            <h1 className="dashboard-title">Dashboard</h1>
            {user ? (
                <div>
                    <p className="connect-user">L'utilisateur est connecté.</p>
                    <p>Nom d'utilisateur : {user.lastName}</p>
                    <p>Adresse e-mail : {user.email}</p>
                </div>
                ) : (
                <p className="connect-user">L'utilisateur n'est pas connecté.</p>
            )}
        </>
    );
}

export default Account;
