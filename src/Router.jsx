// Create react router
// Create a new file in src called Router.jsx
// Copy and paste the following code into the file:
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import About from "./views/About";
import Travel from "./views/Travel";
import DashBoard from "./views/Dashboard";
import UserManagement from "./views/UserManagement";
import CreditCardForm from "./views/CreditCardForm";
import Home from "./views/Home";
import Project from "./views/Project";
//import Paiement from "./views/Paiement";
import Countries from "./views/Countries";
import Settings from "./views/Settings";
//import Pokedex from "./views/Pokedex";
// import Contact from "./views/Contact";
import Registration from "./views/Registration";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import GalleryBoat from "./views/Galleryfirst";
import DescriptionAboutMe from "./views/DescriptionAboutMe";
import ContactMeInfo from "./views/ContactMeinfo";
import ViewWork from "./views/ViewWork";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/descriptionaboutme" element={<DescriptionAboutMe />} />
            <Route exact path="/contactme" element={<ContactMeInfo />} />
            <Route exact path="/viewwork" element={<ViewWork />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/travel" element={<Travel />} />
            <Route exact path="/dashboard" element={<DashBoard />} />
            <Route path="/dashboard/users" element={<UserManagement />} />
            <Route path="/dashboard/payments" element={<CreditCardForm />} />
            <Route exact path="/project" element={<Project />} />
            {/* <Route exact path="/paiement" element={<Paiement />} /> */}
            {/* <Route exact path="/pokedex" element={<Pokedex />} /> */}
            <Route exact path="/countries" element={<Countries />} />
            <Route exact path="/settings" element={<Settings />} />
            {/* <Route exact path="/contact" element={<Contact />} /> */}
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/galleryboat" element={<GalleryBoat />} />
            <Route exact path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;