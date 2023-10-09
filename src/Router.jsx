// Create react router
// Create a new file in src called Router.jsx
// Copy and paste the following code into the file:
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import About from "./views/About";
import CreditCardForm from "./views/CreditCardForm";
import Home from "./views/Home";
import Settings from "./views/Settings";
import NotFound from "./views/NotFound";
import DescriptionAboutMe from "./views/DescriptionAboutMe";
import ContactMeInfo from "./views/ContactMeinfo";
import DispSignUp from "./views/DispSignUp";
import LogIn from "./components/SignUp/LogIn";
import SignUp from "./components/SignUp/SignUp";
import ShowEcommerce from "./views/ShowEcommerce";
import Panier from "./components/Ecommerce/Panier";
import FormationHtml from "./components/Formation/FormationHtml";
import FormationCSS from "./components/Formation/FormationCss";


const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<DispSignUp />} />
            <Route exact path="/auth" element={<LogIn />} />
            <Route exact path="/authconfirm" element={<SignUp />} />
            <Route exact path="/descriptionaboutme" element={<DescriptionAboutMe />} />
            <Route exact path="/contactme" element={<ContactMeInfo />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/showecommerce" element={<ShowEcommerce />} />
            <Route exact path="/panier" element={<Panier />} />
            <Route exact path="/formationhtml" element={<FormationHtml />} />
            <Route exact path="/formationcss" element={<FormationCSS />} />
            <Route path="/dashboard/payments" element={<CreditCardForm />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;