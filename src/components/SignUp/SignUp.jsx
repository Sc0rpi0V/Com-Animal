import React, { useState } from 'react';
import { auth, firestore } from '../../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './style/SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
    return passwordRegex.test(password);
  };
  

  const handleSignUp = async () => {
    if (!email || !password || !firstName || !lastName || !phoneNumber) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }
  
    if (!validatePassword(password)) {
      setPasswordErrorMessage("Le mot de passe doit contenir au moins 9 caractères, 1 majuscule, 1 minuscule et 1 caractère spécial.");
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Récupérez l'ID d'utilisateur (UID) du nouvel utilisateur
      const uid = userCredential.user.uid;
  
      // Enregistrez les autres informations dans Firestore
      const userDocRef = doc(firestore, 'Users', uid);
      await setDoc(userDocRef, {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        mailAddress: email,
        password: password
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
          <h2>Créer un compte</h2>
            <label className='label-sign'>Nom:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            <label className='label-sign'>Prénom:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            <label className='label-sign'>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            <label className='label-sign'>Mot de passe:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordErrorMessage && <div className="error-message">{passwordErrorMessage}</div>}
            <label className='label-sign'>Téléphone:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="btn-create">
              <button onClick={handleSignUp}>S'inscrire</button>
            </div>
        </div>
        <div className="bottom-form">
          <div className="account">Have an account ?</div>
          <a href="/auth" className="login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
