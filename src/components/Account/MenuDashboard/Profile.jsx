import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Menu from "./Menu";
import '../style/Profile.css';
import { useTranslation } from "react-i18next";

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');

    const { t } = useTranslation();

    const handelAvatarChange = (e) => {
        console.log('Avatar file: ', e.target.files[0]);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleSave = async (e) => {
        e.preventDefault();
    
        try {
            const userAuth = auth.currentUser;
    
            if (userAuth) {
                const userDocRef = doc(firestore, 'Users', userAuth.uid);
                const userDoc = await getDoc(userDocRef);
    
                if (userDoc.exists()) {
                    const userData = userDoc.data();
    
                    if (
                        firstName !== userData.firstName ||
                        lastName !== userData.lastName ||
                        email !== userData.email ||
                        phoneNumber !== userData.phoneNumber ||
                        age !== userData.age
                    ) {
                        const updatedAge = age !== undefined && age !== null ? age.toString() : '';
    
                        console.log('Updating user data:', {
                            firstName,
                            lastName,
                            email,
                            phoneNumber,
                            age: updatedAge,
                        });
    
                        await updateDoc(userDocRef, {
                            firstName,
                            lastName,
                            email,
                            phoneNumber,
                            age: updatedAge,
                        });
    
                        console.log('Modifications enregistrées avec succès!');
                    } else {
                        console.log('Aucune modification détectée.');
                    }
                } else {
                    console.log("Le document de l'utilisateur n'existe pas dans Firestore.");
                }
            } else {
                console.log('Utilisateur non connecté.');
            }
        } catch (error) {
            console.error("Erreur générale lors de la gestion du formulaire:", error);
        }
    };    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
            if (userAuth) {
                const userDocRef = doc(firestore, 'Users', userAuth.uid);

                try {
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setUser(userData);
                        console.log('User', userData);

                        setFirstName(userData.firstName || '');
                        setLastName(userData.lastName || '');
                        setEmail(userData.email || '');
                        setPhoneNumber(userData.phoneNumber || '');
                        setAge(userData.age || '');
                        console.log('setAge:', userData.age);
                    } else {
                        console.log("Le document de l'utilisateur n'existe pas dans Firestore.");
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des données de l'utilisateur depuis Firestore:", error);
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="profile-container">
            <Menu />
            <div className="profile-content">
                <h1 className="profile-title">{t('myProfil')}</h1>
                {user ? (
                    <div className="profile">
                        <p className='connect-user'>L'utilisateur est connecté</p>
                        <form className="user-profil">
                            <label htmlFor="firstName">{t('firstName')}</label>
                            <input type="text" id="nom" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} />
                            <label htmlFor="lastName">{t('lastName')}</label>
                            <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
                            <label htmlFor="email">{t('mail')}</label>
                            <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                            <label htmlFor='phone'>{t('phoneNumber')}</label>
                            <input type="tel" id="tel" placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneChange} />
                            <label htmlFor="age">{t('age')}</label>
                            <input type="text" id="age" placeholder="Age" value={age} onChange={handleAgeChange} />
                            <label htmlFor="avatar">Avatar</label>
                            <input type="file" id="avatar" accept="image/*" placeholder="Upload your avatar" onChange={handelAvatarChange} />
                            <div className='button-container'> 
                                <button onClick={handleSave} className="save profil-button">{t('save')}</button>
                                <button type="reset" className="reset profil-button">{t('reset')}</button>
                                <button type="submit" className="cancel profil-button">{t('cancel')}</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <p>Connectez-vous pour voir les informations du compte.</p>
                )}
            </div>
        </div>
    );
}

export default UserProfile;