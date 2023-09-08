import "./style/Settings.css";
import Header from "../components/Header/Header";

const Home = () => {
    return (
        <>
        <Header />
            <div className="profile-description">
                <h1 className="profile-name">Valentin BOURY</h1>
                <p className="profile-summary">
                    Passionné par le développement Backend, je fusionne la puissance de la technologie 
                    avec la créativité du code pour créer des expériences en ligne exceptionnelles. 
                    Ma boîte à outils inclut une gamme de technologies, allant de React pour construire 
                    des interfaces utilisateur dynamiques, à PHP pour créer des bases de données robustes 
                    et des logiques serveur complexes. Je jongle avec Javascript, HTML et CSS pour donner 
                    vie à mes idées, en créant des sites Web fluides et esthétiquement plaisants.
                </p>
            </div>
        </>
    );
}

export default Home;