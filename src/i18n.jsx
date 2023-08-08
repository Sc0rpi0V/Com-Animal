import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({ 
  resources: {
    fr: { 
      translation: {
        cookies: 'Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer sur le site, vous acceptez notre utilisation des cookies.',
        agreeCookies: 'J\'accepte',
        home: 'Accueil' ,
        about: 'A Propos',
        dashboard: 'Tableau de bord',
        project: 'Projets',
        paiement: 'Paiement',
        countries: 'Pays',
        settings: 'Paramètres',
        pokedex: 'Pokedex',
        contact: 'Contacter',
        users: 'Utilisateurs',
        connexion: 'Connexion',
        registration: 'Création',
        hello: 'Bonjour je suis un',
        backend: 'Back-End',
        developer: 'Développeur',
        firstp: 'Bonjour à tous et bienvenue sur mon premier site en React.',
        technology: 'Technologies',
        aboutMe: 'À Propos de Moi',
        story: 'Une Histoire de Travail Acharné et de Persévérance',
        passionateComputer: 'Passionné d\'informatique depuis plus de 10 ans maintenant, je me suis lancé dans le monde de la programmation web en solo. Ayant une formation dans le mileu du réseaux informatique (RIMS = Réseaux Informatiques Mobilité et Sécurité).',
        realisation: 'Je réalise quelque sites ou quelques codes afin de pouvoir garder la main sur certains Langages de programmation (Java, Javascript, PHP, C/C#), afin de ne pas être en retard sur les dernières technologies et dernières mises à jour. Ayant un esprit rapide et une facilité de compréhension, cela me permet de pouvoir interpréter et mettre en place assez facilement et rapidement ce que l\'on me demande.',
        informationCV: 'Voici un aperçu de mon profil, avec mes différentes expériences et formations que j\'ai pu suivre. N\'hésitez pas à me contacter si vous souhaitez plus d\'informations.',
        downloadCV: 'Télécharger le CV',
        myServices: 'Mes Services',
        infoBack: 'Le développeur back-end est le cerveau invisible derrière les applications et les sites web que nous utilisons au quotidien. En se concentrant sur la logique et la fonctionnalité qui se cachent sous la surface, ce professionnel de la programmation crée et maintient les serveurs, les bases de données et les algorithmes qui permettent aux systèmes de fonctionner en douceur. En utilisant des langages de programmation tels que Python, Java, Ruby ou PHP, le développeur back-end conçoit les structures qui permettent le traitement des données, la gestion des utilisateurs et la communication avec le front-end.',
        infoTechno: 'En tant que développeur confirmé, je maîtrise à la fois WordPress et React, deux piliers essentiels du développement web. Avec WordPress, je crée des sites web dynamiques et conviviaux en utilisant des thèmes et des plugins personnalisés pour répondre aux besoins uniques de chaque projet. De plus, grâce à ma maîtrise de React, je suis en mesure de concevoir des interfaces utilisateur interactives et réactives, offrant ainsi une expérience en ligne fluide et captivante. Mon expertise dans ces deux langages me permet de fusionner le côté fonctionnel de WordPress avec la puissance de React, créant ainsi des expériences web attrayantes et efficaces pour les utilisateurs.',
        infoGestion: 'En tant que professionnel ayant atteint un niveau confirmé dans la gestion de Git et Docker, je possède une expertise solide dans le domaine du développement et du déploiement de logiciels. Avec Git, je gère efficacement les versions du code source, facilitant ainsi la collaboration au sein d\'équipes et le suivi des modifications. Grâce à ma maîtrise de Docker, je suis en mesure de créer, déployer et gérer des environnements d\'application isolés, assurant ainsi une portabilité et une stabilité optimales lors du déploiement sur différentes plateformes. Mon expérience dans l\'utilisation de Docker me permet d\'orchestrer des processus complexes tout en simplifiant la gestion des infrastructures.',
        portfolio: 'Mon Portfolio',
        contactMe: 'Contactez-moi',
        submit: 'Envoyer',
      }  
    } ,
    en: { 
      translation: {
        cookies: 'This site uses cookies to improve your experience. Continuing to navigate on the site, you accept our use of cookies.',
        agreeCookies: 'I agree',
        home: 'Home',
        about: 'About',
        dashboard: 'Dashboard',
        project: 'Projects',
        paiement: 'Payment',
        countries: 'Countries',
        settings: 'Settings',
        pokedex: 'Pokedex',
        contact: 'Contact',
        users: 'Users',
        connexion: 'Login',
        registration: 'Registration',
        hello: 'Hello, I am',
        backend: 'Back-End',
        developer: 'Developer',
        firstp: 'Welcome to my first site on React.',
        technology: 'Technologies',
        aboutMe: 'About Me',
        story: 'A Story of Travail Acharné and of Persuasion',
        passionateComputer: 'Passionate about computers for more than 10 years now, I launched myself into the world of web programming on my own. Having a background in computer networks (RIMS = Computer Networks Mobility and Security).',
        realisation: 'I realize some sites or some codes in order to be able to keep control of certain programming languages (Java, Javascript, PHP, C/C#), in order not to be late on the latest technologies and latest updates. Having a quick mind and an ease of understanding, this allows me to be able to interpret and put in place quite easily and quickly what I am asked to do.',
        informationCV: 'Here is an overview of my profile, with my different experiences and training that I have been able to follow. Do not hesitate to contact me if you want more information.',
        downloadCV: 'CV Download',
        myServices: 'My Services',
        infoBack: 'The back-end developer is the invisible behind the applications and websites that we use at the quotidian. In concentrating on the logic and the functionalities that are hidden under the surface, this professional of the web programming creates and maintains the servers, the databases and the algorithms that allow the systems to work in rapidity. In using programming languages such as Python, Java, Ruby or PHP, the back-end developer creates the structures that allow the data to be processed',
        infoTechno: 'As a developer confirmed, I developed both WordPress and React, two main pillars of the development web. With WordPress, I create dynamic websites and interactive web pages using custom themes and plugins that respond to unique needs of each project. Plus, with my knowledge of React, I am in charge of building interactive interfaces for the user and the front-end, providing a fluid and captivating experience for the users.',
        infoGestion: 'As a professionnel who has achieved a level in the management of Git and Docker, I have an expertise solid in the domain of the development and deployment of software. With Git, I manage efficiently the versions of the code source, facilitating a convenient collaboration among teams and the follow-up of modifications. With Docker, I am in charge of creating, deploying and managing isolated environments of applications, assuring a portability and a stable performance during the deployment on',
        portfolio: 'My Portfolio',
        contactMe: 'Contact Me',
        submit: 'Submit',
      }
    }
  } ,
  lng: 'fr',
  fallbackLng: 'fr'
});

export default i18next;
