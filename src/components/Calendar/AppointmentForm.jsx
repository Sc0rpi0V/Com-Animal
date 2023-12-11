import React, { useState } from 'react';
import './style/AppointmentForm.css';

const AppointmentForm = ({ date, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(`Rendez-vous le ${date.toLocaleDateString()} avec ${name} (${email})`);
    onClose();
  };

  return (
    <div className='calendar-form'>
      <form onSubmit={handleFormSubmit}>
        <label>Nom :</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        <br />
        <label>Email :</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <br />
        <button type="submit">Prendre rendez-vous</button>
        <button type="button" onClick={onClose}>Annuler</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
