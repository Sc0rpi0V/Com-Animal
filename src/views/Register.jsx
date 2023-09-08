import React, { useState } from "react";
import "./style/Login.css";

const Register = () => {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    const toggleForm = (event) => {
        event.preventDefault();
        setIsLoginFormVisible(prevState => !prevState);
    };

    return (
        <div>
            <div className="login-page">
                <div className="form">
                    <form className="register-form" method="post">
                        <h2><i className="fas fa-lock"></i> Register</h2>
                        <input type="text" placeholder="Full Name *" required/>
                        <input type="text" placeholder="Username *" required/>
                        <input type="email" placeholder="Email *" required/>
                        <input type="password" placeholder="Password *" required/>
                        <button type="submit">create</button>
                        <p className="message">
                            Already registered?{" "}
                            <a href="#" onClick={toggleForm}>
                                Sign In
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
