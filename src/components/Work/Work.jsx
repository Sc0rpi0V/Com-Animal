import React from "react";
import './style/Work.css';
import { useTranslation } from "react-i18next";

const Work = () => {

    const { t } = useTranslation();

    return (
        <section className="work">
            <h4>{t('myWork')}</h4>
            <div className="work-card">
                <h5>{t('headerDevBack')}</h5>
                <p>{t('firstPartDevBack')}</p>
                <p>{t('secondPartDevBack')}</p>
                <p>{t('thirdPartDevBack')}</p>
            </div>
            <div className="work-card">
                <h5>{t('devWordpress')}</h5>
                <p>{t('firstPartDevWordpress')}</p>
                <p>{t('secondPartDevWordpress')}</p>
                <p>{t('thirdPartDevWordpress')}</p>
                <p>{t('fourthPartDevWordpress')}</p>
            </div>
            <div className="work-card">
                <h5>{t('devPHP')}</h5>
                <p>
                    Imaginez un développeur PHP comme un architecte de l'infrastructure invisible du web. Leur métier consiste à créer des bases solides 
                    pour les sites Web et les applications en utilisant le langage de programmation PHP. C'est un peu comme construire la structure d'un 
                    bâtiment avant d'y ajouter les détails et la décoration.
                </p>
                <p>
                    Les développeurs PHP sont des maîtres dans l'art de la logique et de la programmation. Ils écrivent du code qui permet aux sites Web
                    de fonctionner de manière transparente, de traiter les données, d'interagir avec les bases de données et de répondre aux demandes des 
                    utilisateurs. Ils sont les artisans derrière les coulisses, veillant à ce que tout fonctionne comme prévu.
                </p>
                <p>
                    En travaillant sur des projets, les développeurs PHP collaborent souvent avec des concepteurs et des développeurs front-end pour donner 
                    vie à des idées. Ils assurent la sécurité des sites Web, la rapidité de leur chargement et leur évolutivité, tout comme un ingénieur 
                    s'assure de la solidité d'une structure.
                </p>
            </div>
            <div className="work-card">
                <h5>Développeur ReactJS / PHP pour Wordpress Gutenberg</h5>
                <p>
                    Un développeur PHP/ReactJS pour WordPress Gutenberg est un artiste du web qui maîtrise l'intégration de technologies avancées pour 
                    transformer l'expérience WordPress en quelque chose de vraiment remarquable. Ils sont un peu comme les maîtres d'œuvre de la fusion 
                    entre la puissance de PHP, la souplesse de ReactJS et la facilité d'utilisation de Gutenberg, le nouvel éditeur de contenu de 
                    WordPress.
                </p>
                <p>
                    Ces développeurs sont des maîtres dans l'art de l'interaction utilisateur. Ils utilisent ReactJS pour créer des composants interactifs 
                    et dynamiques qui s'intègrent parfaitement à WordPress. Cela signifie qu'ils peuvent faire en sorte que l'édition de contenu sur 
                    WordPress soit plus fluide, plus visuelle et plus intuitive.
                </p>
                <p>
                    Ils sont également des magiciens de la personnalisation. Ils prennent les éléments de base de WordPress et les transforment en 
                    expériences uniques et sur mesure. Cela peut inclure la création de blocs personnalisés pour Gutenberg, l'optimisation des 
                    performances, et l'assurance que tout fonctionne parfaitement ensemble.
                </p>
                <p>
                    En fin de compte, le métier de développeur PHP/ReactJS pour WordPress Gutenberg consiste à repousser les limites de ce qui est 
                    possible avec WordPress. Ils combinent la puissance des technologies modernes avec la simplicité de WordPress pour créer des sites 
                    Web qui se démarquent et offrent une expérience utilisateur exceptionnelle. C'est comme être à la fois l'architecte et le chef 
                    d'orchestre d'une symphonie web.
                </p>
            </div>
        </section>
    );
}

export default Work;