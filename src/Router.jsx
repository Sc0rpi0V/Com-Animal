// Create react router
// Create a new file in src called Router.jsx
// Copy and paste the following code into the file:
import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./views/Register";
import About from "./views/About";
import CreditCardForm from "./views/CreditCardForm";
import Home from "./views/Home";
import Settings from "./views/Settings";
import NotFound from "./views/NotFound";
import DescriptionAboutMe from "./views/DescriptionAboutMe";
import DescriptionAboutCom from "./views/DescriptionAboutCom";
import Exercices from "./views/Exercice";
import Anchoring from "./components/Preparation/step/Anchoring";
import OpenHearth from "./components/Preparation/step/OpenHearth";
import Relaxation from "./components/Preparation/step/Relaxation";
import SpiritConnexion from "./components/Preparation/step/SpiritConnexion";
import SensoryExchanges from "./components/Preparation/step/SensoryExchanges";
import MyCalendar from "./components/Calendar/Calendar";
import ViewWork from "./views/ViewWork";
import ContactMeInfo from "./views/ContactMeinfo";
import DispSignUp from "./views/DispSignUp";
import LogIn from "./components/SignUp/LogIn";
import SignUp from "./components/SignUp/SignUp";
import DispAccount from "./views/DispAccount";
import Profile from "./components/Account/MenuDashboard/Profile";
import ResetPassword from "./components/Account/MenuDashboard/ResetPassword";
import ChangeAddresss from "./components/Account/MenuDashboard/ChangeAddress";
import ShowEcommerce from "./views/ShowEcommerce";
import Panier from "./components/Ecommerce/Panier";
import FirstFormation from "./components/Formation/FirstFormation";
import SecondFormation from "./components/Formation/SecondFormation";


const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<DispSignUp />} />
            <Route exact path="/auth" element={<LogIn />} />
            <Route exact path="/authconfirm" element={<SignUp />} />
            <Route exact path="/account" element={<DispAccount />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/changepassword" element={<ResetPassword />} />
            <Route exact path="/changeaddress" element={<ChangeAddresss />} />
            <Route exact path="/descriptionaboutme" element={<DescriptionAboutMe />} />
            <Route exact path="/descriptionaboutcom" element={<DescriptionAboutCom />} />
            <Route exact path="/exercice" element={<Exercices />} />
            <Route exact path="/anchoring" element={<Anchoring />} />
            <Route exact path="/openhearth" element={<OpenHearth />} />
            <Route exact path="/relaxation" element={<Relaxation />} />
            <Route exact path="/spiritconnexion" element={<SpiritConnexion />} />
            <Route exact path="/sensoryexchange" element={<SensoryExchanges />} />
            <Route exact path="projectlist" element={<MyCalendar />} />
            <Route exact path="/viewwork" element={<ViewWork />} />
            <Route exact path="/contactme" element={<ContactMeInfo />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/showecommerce" element={<ShowEcommerce />} />
            <Route exact path="/panier" element={<Panier />} />
            <Route exact path="/firstformation" element={<FirstFormation />} />
            <Route exact path="/secondformation" element={<SecondFormation />} />
            <Route path="/dashboard/payments" element={<CreditCardForm />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;