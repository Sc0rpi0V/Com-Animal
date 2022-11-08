import React, {useState} from 'react';
import "./style/Connexion.css";

const ConnexionForm = () => {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [confPassword , setConfPassword] = useState('');

  // function to update state of email with value
  // enter by user in form
  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  }
    // function to update state of password with
    // value enter by user in form
  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }
    // function to update state of confirm password
    // with value enter by user in form
  const handleConfPasswordChange =(e)=>{
    setConfPassword(e.target.value);
  }
  // below function will be called when user
  // click on submit button .
  const handleSubmit=(e)=>{
    if(password !== confPassword)
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
        <h4>LOG IN</h4>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <div className="input_email">
            <label> Email :
              <input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} />
            </label>
          </div>
            {/* when user write in email input box , handleEmailChange()
                function will be called.*/}
          <div className="input_password">
            <label> Password :
              <input type="password" value={password} required onChange={(e) => {handlePasswordChange(e)}} />
            </label>
          </div>
                {/* when user write in password input box ,
                    handlePasswordChange() function will be called.*/}
          <div className="input_confirm_password">
            <label> Confirm Password :
              <input type="password" value={confPassword} required onChange={(e) => {handleConfPasswordChange(e)}} />
            </label>
          </div>
                  {/* when user write in confirm password  input box ,
                      handleConfPasswordChange() function will be called.*/}
          <button type="submit" value="=submit"> Envoyer</button>
          <div className="registration">
            <span> Don't have an account ?</span>
            <a href="Registration">Registration</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConnexionForm;