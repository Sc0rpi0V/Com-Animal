import "./style/Settings.css";
import about_me from "../img/about_me.jpg";
import project from "../img/check.jpg";
import countries from "../img/countries.jpg";
import pokedex from "../img/pokedex.jpg";
import contactus from "../img/contact_us.jpg";
import userscontact from "../img/users_contact.jpg";
import connexion from "../img/connexion.jpg";
import registration from "../img/registration.jpg";
import Card from "../components/Card";

const menuLinks = [
    {
        name: "About",
        backgroundImage: about_me,
        title: "About",
        subTitle: "React Site"
    },
    {
        name: "Project",
        backgroundImage: project,
        title: "Project",
        subTitle: "React Site"
    },
    {
        name: "Countries",
        backgroundImage: countries,
        title: "Countries",
        subTitle: "React Site"
    },
    {
        name: "Pokedex",
        backgroundImage: pokedex,
        title: "Pokedex",
        subTitle: "React Site"
    },
    {
        name: "Contact",
        backgroundImage: contactus,
        title: "Contact Us",
        subTitle: "React Site"
    },
    {
        name: "Users",
        backgroundImage: userscontact,
        title: "Users Contact",
        subTitle: "React Site"
    },
    {
        name: "Connexion",
        backgroundImage: connexion,
        title: "Connexion",
        subTitle: "React Site"
    },
    {
        name: "Registration",
        backgroundImage: registration,
        title: "Registration",
        subTitle: "React Site"
    }
]

const Home = () => {
    return (
        <div className="cards-container-home">
            {menuLinks.map(link => {
                return <Card link={link} key={link.name} />
            })}
        </div>
    );
}

export default Home;