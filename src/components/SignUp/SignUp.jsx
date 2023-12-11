import React, { useState } from 'react';
import { auth, firestore } from '../../firebase'; 
import { createUserWithEmailAndPassword , updatePassword} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './style/SignUp.css';
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [age, setAge] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const { t } = useTranslation();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = async () => {
    if (!email || !password || !firstName || !lastName || !phoneNumber || !confirmPassword || !address || !city || !state || !zipCode || !age) {
      setErrorMessage(t('fillAllFields'));
      return;
    }

    if (password !== confirmPassword) {
      setErrorPasswordConfirm(t('passwordsDoNotMatch'));
      return;
    }
  
    if (!validatePassword(password)) {
      setPasswordErrorMessage(t('passwordRequirements'));
      return;
    }

    if (!/^[0-9]+$/.test(zipCode)) {
      setErrorMessage(t('numericZipCode'));
      return;
    }

    if (!/^[0-9]+$/.test(phoneNumber)) {
      setErrorMessage(t('numericPhoneNumber'));
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
      // Récupérez l'ID d'utilisateur (UID) du nouvel utilisateur
      const uid = userCredential.user.uid;
    
      // Mise à jour du mot de passe
      await updatePassword(userCredential.user, password);
    
      const userDocRef = doc(firestore, 'Users', uid);
      await setDoc(userDocRef, {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        address: address,
        city: city,
        state: state,
        zipCode: zipCode,
        age: age,
      });
    
      console.log('Compte créé avec succès!');
    } catch (error) {
      console.error('Erreur lors de la création du compte:', error);
    }    
  };  

  return (
    <div className='sign-form'>
      <form action="#" className='sub-form'>
        <div className="upper-form">
          <h2>{t('createAccount')}</h2>
            <label className='label-sign'>{t('name')}:</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <label className='label-sign'>{t('firstName')}:</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <label className='label-sign'>{t('mail')}:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className='label-sign'>{t('address')}:</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            <label className='label-sign'>{t('city')}:</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <label className='label-sign'>{t('state')}:</label>
              <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
            <label className='label-sign'>{t('zipCode')}:</label>
              <input type="text" pattern="[0-9]+" title="Five digit zip code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
            <label className='label-sign'>{t('age')}: </label>
              <input type="number" value={age} onChange={(e) =>setAge(e.target.value)} />
            <label className='label-sign'>{t('phoneNumber')}:</label>
              <input type="tel" pattern ="[0-9]+" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <label className='label-sign'>{t('password')}:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {passwordErrorMessage && <div className="error-message">{passwordErrorMessage}</div>}
            <label className='label-sign'>{t('confirmPassword')}:</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              {errorPasswordConfirm && <div className="error-message">{errorPasswordConfirm}</div>}
            <div className="btn-create">
              <button onClick={handleSignUp}>{t('register')}</button>
            </div>
        </div>
        <div className="bottom-form">
          <div className="account">{t('haveAccount')}</div>
          <a href="/auth" className="login">{t('login')}</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
