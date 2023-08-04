// i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({ 
  resources: {
    fr: { 
      translation: {
        home: 'Accueil' ,
        about: 'A Propos',
        project: 'Projets',
        paiement: 'Paiement',
        countries: 'Pays',
        pokedex: 'Pokedex',
        contact: 'Contacter',
        users: 'Utilisateurs',
        connexion: 'Connexion',
        registration: 'Création'
      }  
    } ,
    en: { 
      translation: {
        home: 'Home' ,
        about: 'About',
        project: 'Project',
        paiement: 'Paiement',
        countries: 'Countries',
        pokedex: 'Pokedex',
        contact: 'Contact',
        users: 'Users',
        connexion: 'Connection',
        registration: 'Registration'
      }
    }
  } ,
  lng: 'fr',
  fallbackLng: 'fr'
});

export default i18next;
