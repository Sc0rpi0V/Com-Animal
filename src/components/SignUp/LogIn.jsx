import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { query, where, getDocs, collection } from 'firebase/firestore';
import './style/LogIn.css';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // L'utilisateur est connecté
        login(user);
      } else {
        // L'utilisateur n'est pas connecté
        logout();
      }
    });

    return () => unsubscribe();
  }, [login, logout]);

  const handleLogin = async () => {
    try {
      const usersRef = query(
        collection(firestore, 'Users'),
        where('mailAddress', '==', email)
      );
      const userSnapshot = await getDocs(usersRef);

      if (!userSnapshot.empty) {
        const userData = userSnapshot.docs[0].data();
        
        if (userData.lastName === name) {
          await setPersistence(auth, browserSessionPersistence);
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log('Connecté avec succès!', userCredential.user);

          login(userData);
          navigate('/account');

          setEmail('');
          setPassword('');
          setName('');
          setErrorMessage('');
          return;
        }
      }

      setErrorMessage('Les informations de connexion sont incorrectes.');
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setErrorMessage('Les informations de connexion sont incorrectes.');
    }
  };

  return (
    <div className='login-form'>
      <form action="#" className='sub-form-login'>
        <div className="upper-form">
          <h2>Se Connecter</h2>
          <label className='label-login'>Nom:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className='label-login'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='label-login'>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="btn-create">
            <button onClick={handleLogin}>Se connecter</button>
          </div>
        </div>
        <div className="bottom-form">
          <div className="account">Don't have an account ?</div>
          <a href="/authconfirm" className="signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
