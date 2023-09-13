import React from "react";
import "./style/Engie.css";

const ENGIE = () => {

    return (
        <section className="engie">
            <h1>Projet ENGIE (Maps des Stations)</h1>
            <hr />
            <p>
                La transition vers la mobilité électrique est l'une des révolutions les plus passionnantes du secteur de l'énergie, 
                et le projet ENGIE a joué un rôle clé dans cette transformation. Ce projet a donné naissance à un système de 
                cartographie novateur qui permet aux utilisateurs de localiser facilement les bornes de recharge pour véhicules 
                électriques et de planifier leurs trajets en conséquence.
            </p>
            <p>
                L'un des défis majeurs de ce projet était de créer une expérience utilisateur transparente tout en intégrant des 
                informations complexes provenant de sources diverses. Pour résoudre ce défi, j'ai du mettre en œuvre une approche 
                ingénieuse en utilisant deux API essentielles.
            </p>
            <p>
                L'API Google Maps a été le pilier de la solution de cartographie. Elle a permis de créer une interface interactive, 
                conviviale et visuellement attrayante. Les utilisateurs peuvent facilement zoomer, faire glisser la carte et 
                interagir avec différents marqueurs pour localiser les bornes de recharge les plus proches. De plus, l'API Google 
                Maps a été utilisée pour calculer les distances entre les points, aidant ainsi les utilisateurs à planifier leur 
                trajet en fonction de l'autonomie de leur véhicule électrique.
            </p>
            <p>
                L'API Chargetrip, de son côté, a fourni des informations essentielles sur les véhicules électriques, les types de 
                prises et les bornes de recharge. Cette API a permis de créer une base de données complète, actualisée en temps réel,
                qui garantit que les utilisateurs ont accès aux informations les plus récentes et les plus précises pour planifier 
                leurs déplacements en toute confiance.
            </p>
            <p>
                L'intégration harmonieuse de ces deux API a permis de créer un système de cartographie complet qui révolutionne la 
                manière dont les conducteurs de véhicules électriques planifient leurs déplacements. Les utilisateurs peuvent 
                désormais localiser rapidement des bornes de recharge compatibles avec leur véhicule, calculer la distance jusqu'à 
                leur destination et choisir le meilleur itinéraire en fonction des points de recharge disponibles.
            </p>
        </section>
    );
}

export default ENGIE;