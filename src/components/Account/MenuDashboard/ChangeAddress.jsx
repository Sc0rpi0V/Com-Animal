import React, { useState, useEffect } from "react";
import { auth, firestore } from '../../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Menu from "./Menu";
import '../style/ChangeAddress.css';
import { useTranslation } from "react-i18next";

const ChangeAddress = () => {
    const [user, setUser] = useState(null);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    const { t } = useTranslation();

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleStateChange = (e) => {
        setState(e.target.value);
    }

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
    }

    const handleSave = async (e) => {
        e.preventDefault();

        try {
            const userAuth = auth.currentUser;

            if (!userAuth) {
                console.log('Utilisateur non connecté.');
                return;
            }

            const userDocRef = doc(firestore, 'Users', userAuth.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const userData = userDoc.data();

                if (
                    address !== userData.address ||
                    city !== userData.city ||
                    state !== userData.state ||
                    zipCode !== userData.zipCode
                ) {
                    await updateDoc(userDocRef, {
                        address,
                        city,
                        state,
                        zipCode,
                    });

                    console.log('Adresse modifiée avec succès!');
                } else {
                    console.log("Aucune modification d'adresse");
                }
            } else {
                console.log("Document non présent dans Firestore pour l'adresse.");
            }
        } catch (error) {
            console.error("Erreur lors de la modification d'adresse", error);
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
                        console.log('User Address', userData);

                        setAddress(userData.address || '');
                        setCity(userData.city || '');
                        setState(userData.state || '');
                        setZipCode(userData.zipCode || '');
                    } else {
                        console.log("Document non présent dans Firestore pour l'adresse.");
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des données", error);
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="address-container">
            <Menu />
            <div className="address-content">
                <h1 className="address-title">{t('changeAddress')}</h1>
                <div className="address">
                    <form className="user-address" onSubmit={handleSave}>
                        <label htmlFor="address">{t('address')}</label>
                        <input type="text" id="address" placeholder="Enter address" value={address} onChange={handleAddressChange} />
                        <label htmlFor="zipCode">{t('zipCode')}</label>
                        <input type="text" id="zipCode" placeholder="Enter ZIP Code" value={zipCode} onChange={handleZipCodeChange} />
                        <label htmlFor="city">{t('city')}</label>
                        <input type="text" id="city" placeholder="Enter City" value={city} onChange={handleCityChange} />
                        <label htmlFor="state">{t('state')}</label>
                        <input type="text" id="state" placeholder="Enter State" value={state} onChange={handleStateChange} />
                        <div className="button-container">
                            <button type="submit" className="save address-button">{t('save')}</button>
                            <button type="reset" className="reset address-button">{t('reset')}</button>
                            <button type="submit" className="cancel address-button">{t('cancel')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChangeAddress;