import React, { useState } from 'react';
import "./style/ContactForm.css";
// import {useForm} from "react-hook-form";

const ContactForm = ({ onSubmit }) => {

  // const {register, handleSubmit} = useForm();
  // const onSubmit = (d) => alert(JSON.stringify(d));


  const [formValues, setFormValues] = useState({
    civilite: "",
    nomFamille: "",
    prenom: "",
    email: "",
    address: "",
    ville: "",
    postal: "",
    phone: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(`${e.target.name} updated with ${e.target.value}`);

    const formIsValid = Object.values(formValues).every((value) => value.trim() !== "");
    setIsFormValid(formIsValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = [];
  
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'));
    }
  
    if (users.length === 0) {
      users.push({ id: 1, ...formValues });
    } else {
      users.push({ id: Math.max(...users.map((item) => item.id)) + 1, ...formValues });
    }
  
    console.log("Data to be saved:", users);
    localStorage.setItem('users', JSON.stringify(users));
    alert("success");
    onSubmit(formValues);
  };
  

  return (
    <div className="box_contact">
      <div className="form_box_contact">
        <h4>Contact Us</h4>
        <form onSubmit={handleSubmit}>
          <div className="input_civil_contact">
            <label> Civilité : </label>
            <select name="civilite" id="pet-select">
              <option value="">--Sélectionner un choix--</option>
              <option value="mr">Mr</option>
              <option value="mme">Mme</option>
              <option value="mlle">Mlle</option>
            </select>
          </div>
          <div className="input_name_contact">
            <label>
              Nom : <input type="text" id="name" name="nomFamille" onChange={handleChange} value={formValues.nomFamille} />
            </label>
          </div>
          <div className="input_prenom_contact">
            <label>
              Prenom : <input type="text" id="prenom" name="prenom" onChange={handleChange} value={formValues.prenom} />
            </label>
          </div>
          <div className="input_email_contact">
            <label>
              Email : <input type="text" id="email" name="email" onChange={handleChange} value={formValues.email} />
            </label>
          </div>
          <div className="input_address_contact">
            <label>
              Adresse : <input type="text" id="address" name="address" onChange={handleChange} value={formValues.address} />
            </label>
          </div>
          <div className="input_ville_contact">
            <label>
              Ville : <input type="text" id="ville" name="ville" onChange={handleChange} value={formValues.ville} />
            </label>
          </div>
          <div className="input_postal_contact">
            <label>
              Code Postal : <input type="number" id="postal" name="postal" onChange={handleChange} value={formValues.postal} />
            </label>
          </div>
          <div className="input_phone_contact">
            <label>
              Téléphone : <input type="number" id="phone" name="phone" onChange={handleChange} value={formValues.phone} />
            </label>
          </div>
          <button type="submit" value="submit" disabled={!isFormValid} >Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;