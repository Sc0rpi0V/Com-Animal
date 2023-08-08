import React from "react";
import "./style/UserManagement.css";
import { useUserContext } from "./UserContext";

const UserManagement = () => {
    const { userData, setUserData } = useUserContext();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Données utilisateur soumises :", userData);
        setUserData({
            firstName: "",
            lastName: "",
            email: "",
        });
    };

    return (
        <div>
            <h1>User Management</h1>
            <div className="register-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={userData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={userData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Create User</button>
                </form>
            </div>
        </div>
    );
};

export default UserManagement;
