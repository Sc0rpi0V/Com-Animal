import React, {useState} from 'react';
import "./style/Registration.css";

const RegistrationForm = () => {

  const [firstName, setFirstName] = useState('');
  const [userName, setUserName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "firstName"){
          setFirstName(value);
      }
      if(id === "lastName"){
          setLastName(value);
      }
      if(id === "userName"){
        setUserName(value);
      }
      if(id === "email"){
          setEmail(value);
      }
      if(id === "password"){
          setPassword(value);
      }
      if(id === "confirmPassword"){
          setConfirmPassword(value);
      }

  }

  const handleSubmit  = (e) => {
    if(password !== confirmPassword)
    {
      // if 'password' and 'confirm password'
      // does not match.
      alert("password Not Match");
    }
    else{
      // display alert box with user
      // 'name' and 'email' details .
      alert('A form was submitted with Email :"' + email + '"');
    }
    e.preventDefault();
  }
  return (
    <div className="box">
      <div className="form_box">
        <h4>REGISTER FORM</h4>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <div className="input_firstname">
            <label>First Name :
              <input type="firstname" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
            </label>
          </div>
          <div className="input_lastname">
            <label>Last Name :
              <input type="lastname" name="" id="lastName" value={lastName}  onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
            </label>
          </div>
          <div className="input_username">
            <label>UserName :
              <input type="username" value={userName} onChange = {(e) => handleInputChange(e)} id="userName" placeholder="User Name"/>
            </label>
          </div>
          <div className="input_email">
            <label>Email :
              <input  type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
            </label>
          </div>
          <div className="input_password">
            <label>Password :
              <input type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
            </label>
          </div>
          <div className="input_confirm_password">
            <label>Confirm Password :
              <input type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
            </label>
          </div>
          <button onClick={()=>handleSubmit()} type="submit" value="submit">Register</button>
          <div className="registration_form">
            <span>Don't have an account ?</span>
            <a href="Connexion">Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;