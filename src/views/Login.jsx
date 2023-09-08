import React from "react";
import "./style/Login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {

    return (
        <div>
            <div className="login-page">
                <div className="form">
                    <form className="login-form" method="post">
                        <h2><FontAwesomeIcon icon={faLock} />Login</h2>
                        <input type="text" placeholder="Username" required />
                        <input type="password" placeholder="Password" required/>
                        <button type="submit" name="send2">login</button>
                        <p className="message">
                            Not registered?{" "}
                            <Link to="/register">Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
