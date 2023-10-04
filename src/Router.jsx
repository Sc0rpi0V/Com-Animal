// Create react router
// Create a new file in src called Router.jsx
// Copy and paste the following code into the file:
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import About from "./views/About";
import Travel from "./views/Travel";
import ProjectList from "./views/ProjectList";
import DashBoard from "./views/Dashboard";
import UserManagement from "./views/UserManagement";
import CreditCardForm from "./views/CreditCardForm";
import Home from "./views/Home";
import Project from "./views/Project";
import Countries from "./views/Countries";
import Settings from "./views/Settings";
import Pokedex from "./views/Pokedex";
// import Contact from "./views/Contact";
import Registration from "./views/Registration";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import GalleryBoat from "./views/Galleryfirst";
import DescriptionAboutMe from "./views/DescriptionAboutMe";
import ContactMeInfo from "./views/ContactMeinfo";
import ViewWork from "./views/ViewWork";
import ViewPortfolio from "./views/ViewProject";
import IFS from "./components/Portfolio/CardPortfolio/Ifs";
import CALFMVP from "./components/Portfolio/CardPortfolio/CalfMvp";
import EDFENR from "./components/Portfolio/CardPortfolio/EdfEnr";
import ENGIE from "./components/Portfolio/CardPortfolio/Engie";
import WORDPRESS from "./components/Portfolio/CardPortfolio/Wordpress";
import CALFV1 from "./components/Portfolio/CardPortfolio/CalfV1";
import VisaCreditCard from "./components/ListProjects/Projects/PaiementCard";
import Carousel from "./components/Carousel/Carousel";
import ToDoList from "./components/ToDoList/ToDoList";
import DisplayCardRecette from "./views/DisplayCardRecette";
import DispSignUp from "./views/DispSignUp";
import LogIn from "./components/SignUp/LogIn";
import SignUp from "./components/SignUp/SignUp";


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
            <Route exact path="/viewwork" element={<ViewWork />} />
            <Route exact path="/viewproject" element={<ViewPortfolio />} />
            <Route exact path="/cardifs" element={<IFS />} />
            <Route exact path="/cardcalfmvp" element={<CALFMVP />} />
            <Route exact path="/cardcalfv1" element={<CALFV1 />} />
            <Route exact path="/cardedfenr" element={<EDFENR />} />
            <Route exact path="/cardengie" element={<ENGIE />} />
            <Route exact path="/cardwordpress" element={<WORDPRESS />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/travel" element={<Travel />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/projectlist" element={<ProjectList />} />
            <Route exact path="/visacreditcard" element={<VisaCreditCard />} />
            <Route exact path="/carousel" element={<Carousel />} />
            <Route exact path="/todolist" element={<ToDoList />} />
            <Route exact path="/dashboard" element={<DashBoard />} />
            <Route path="/dashboard/users" element={<UserManagement />} />
            <Route path="/dashboard/payments" element={<CreditCardForm />} />
            <Route exact path="/countries" element={<Countries />} />
            <Route exact path="/pokedex" element={<Pokedex />} />
            <Route exact path="/displaycardrecette" element={<DisplayCardRecette />} />
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