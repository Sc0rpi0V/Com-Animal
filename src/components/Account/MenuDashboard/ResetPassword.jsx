import React, { useState, useEffect } from "react";
import { auth, firestore } from '../../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Menu from "./Menu";
import '../style/ResetPassword.css';
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const { t } = useTranslation();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError('');
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

                if (password === userData.password) {
                    setPasswordError(t('passwordNotDifferent'));
                    return;
                }

                if (password !== confirmPassword) {
                    setConfirmPasswordError(t('passwordsDoNotMatch'));
                    return;
                }

                await updateDoc(userDocRef, {
                    password
                });

                console.log('Password updated with success');
            } else {
                console.log('User document not found in Firestore.');
            }
        } catch (error) {
            console.error('Error updating password', error);
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

                        setPassword(userData.password || '');
                        setConfirmPassword(userData.confirmPassword || '');
                    } else {
                        console.log('User document not found in Firestore.');
                    }
                } catch (error) {
                    console.error('Error updating user password', error);
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="password-container">
            <Menu />
            <div className="password-content">
                <h1 className="password-title">{t('changePassword')}</h1>
                <div className="password">
                    <form className="user-password" onSubmit={handleSave}>
                        <label htmlFor="password">{t('password')}</label>
                            <input type="password" className="password" id="password" placeholder="Password" onChange={handlePasswordChange} />
                        {passwordError && <div className="error-message">{passwordError}</div>}
                        <label htmlFor="passwordConfirm">{t('passwordConfirm')}</label>
                            <input type="password" className="password" id="passwordConfirm" placeholder="Confirm Your Password" onChange={handleConfirmPasswordChange} />
                        {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
                        <div className="button-container">
                            <button type="submit" className="save-password">{t('savePassword')}</button>
                            <button type="reset" className="reset-password">{t('resetPassword')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
